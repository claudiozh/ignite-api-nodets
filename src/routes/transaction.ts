import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { checkSessionIdExist } from '../middlewares/check-session-id-exist'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: [checkSessionIdExist] }, async (req) => {
    const { sessionId } = req.cookies
    const transactions = await knex('transactions')
      .where('session_id', sessionId)
      .select()

    return {
      transactions,
    }
  })

  app.get('/:id', { preHandler: [checkSessionIdExist] }, async (req) => {
    const { sessionId } = req.cookies
    const getTransactionParamsSchema = z.object({
      id: z.string(),
    })

    const { id } = getTransactionParamsSchema.parse(req.params)
    const transaction = await knex('transactions')
      .where({
        id,
        session_id: sessionId,
      })
      .first()

    return {
      transaction,
    }
  })

  app.get('/summary', { preHandler: [checkSessionIdExist] }, async (req) => {
    const { sessionId } = req.cookies

    const summary = await knex('transactions')
      .where('session_id', sessionId)
      .sum('amount', { as: 'amount' })
      .first()

    return { summary }
  })

  app.post('/', async (req, res) => {
    const transactionSchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = transactionSchema.parse(req.body)

    let sessionId = req.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      res.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return res.status(201).send()
  })
}
