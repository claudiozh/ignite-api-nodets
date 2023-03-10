# Api Rest Nodejs

## Requisitos Funcionais (RF)
- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um extrato da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

## Regras de Negócios (RN)
- [x] A transação pode do tipo crédito que somará ao valor total, ou débito que será subtraído;
- [] Deve ser possível identificar o usuário entre as requisições;
- [] O usuário só pode visualizar transações que ele criou;

# Dependências
* fastify: É um framework web extremamente rápido e eficiente para Node.js. Ele usa uma arquitetura extensível baseada em plugins para fornecer recursos adicionais ao aplicativo.
* typescript: É um superset do JavaScript que adiciona recursos como tipos estáticos, interfaces e outras funcionalidades avançadas ao JavaScript. Ele ajuda a escrever aplicativos mais seguros e robustos.
* @types/node: É uma biblioteca de definições de tipo para o Node.js. Ele fornece tipos estáticos para as APIs internas e externas do Node.js.
* tsx: É um plugin TypeScript que permite a escrita de arquivos de componente do React com extensão .tsx.
eslint: É uma ferramenta de análise de código que ajuda a detectar e corrigir problemas de qualidade de código. Ele fornece regras para verificar o código em relação a boas práticas de codificação e padrões de codificação.
* @rocketseat/eslint-config: É um conjunto de regras de estilo de codificação pré-configuradas para o ESLint que segue as melhores práticas da Rocketseat.
* knex: É um construtor de consultas SQL para Node.js. Ele permite escrever consultas SQL de forma programática e é útil para trabalhar com bancos de dados relacionais.
* *od: É uma biblioteca de validação de esquema para JavaScript e TypeScript. Ele permite definir esquemas de dados e validar se os dados fornecidos correspondem a esses esquemas.
* @fastify/cookie: É um plugin para o Fastify que adiciona suporte a cookies. Ele permite definir, enviar e receber cookies em solicitações HTTP.
* vitest: É uma biblioteca de teste para aplicativos Node.js. Ele permite escrever e executar testes automatizados para aplicativos Node.js.
* tsup: É um empacotador de módulo TypeScript. Ele permite empacotar arquivos TypeScript em um único arquivo JavaScript, otimizado para produção.

