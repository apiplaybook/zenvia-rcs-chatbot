# zenvia-rcs-chatbot

Este projeto tem um exemplo de como criar um chatbot para mensagens RCS usando a API da Zenvia.

## Como rodar a aplicação

Você precisa criar uma conta no site da [Zenvia](app.zenvia.com), configurar o ambiente de testes (_Sandbox_) para criar seu **token de acesso**.

Com seu ambiente de testes configurado, coloque suas credenciais no arquivo [`**sendMessage.ts**`](/src/functions/sendMessage.ts), substituindo os campos `REMETENTE`, `DESTINATÁRIO` e `SEU_TOKEN` respectivamente pela sua **keyword**, **número de celular** cadastrado no site e **token de accesso**.

Você também precisa configurar a API para enviar as informações ao _webhook_ e criar uma aplicação no site [pipeline](pipeline.com).

Para mais informações acesse o [artigo escrito na Prensa.li](https://prensa.li/zenvia/fortaleca-sua-comunicacao-com-rcs/) sobre o RCS.

Com tudo configurado, execute o script `dev`:

```bash
npm run dev
#ou
yarn dev
```
