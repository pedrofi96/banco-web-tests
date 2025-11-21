# Projeto de Testes Automatizados — banco-web-tests

Descrição
--------
Projeto de aprendizado sobre automação com Cypress + JavaScript para a aplicação "banco-web". O objetivo é demonstrar organização de testes E2E usando custom commands e fixtures.

Componentes do repositório
--------------------------
- Configuração do Cypress: [cypress.config.js](cypress.config.js)  
- Scripts e dependências: [package.json](package.json)  
- Testes E2E:
  - [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js) — cenários de login
  - [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js) — cenários de transferência
- Support / Commands:
  - [cypress/support/e2e.js](cypress/support/e2e.js)
  - [cypress/support/commands.js](cypress/support/commands.js)
  - Custom commands:
    - [`fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js)
    - [`verificarMensagemNoToast`](cypress/support/commands/common.js)
    - [cypress/support/commands/transferencia.js](cypress/support/commands/transferencia.js)
- Fixtures:
  - [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json)
  - [cypress/fixtures/example.json](cypress/fixtures/example.json)

Pré-requisitos
--------------
- Node.js (versão compatível com Cypress 14.x)
- As aplicações abaixo devem estar em execução:
  - banco-web (frontend): https://github.com/juliodelimas/banco-web
  - banco-api (API): https://github.com/juliodelimas/banco-api
- As urls esperadas estão configuradas para rodar localmente em `http://localhost:4000` (veja [cypress.config.js](cypress.config.js)).

Instalação
----------
1. Instalar dependências:
   ```sh
   npm install
   ```
   (As dependências estão definidas em [package.json](package.json).)

Execução dos testes
-------------------
- Executar todos os testes em modo headless (CI / terminal):
  ```sh
  npm test
  ```
- Executar testes com Cypress GUI:
  ```sh
  npm run cy:open
  ```
- Executar em modo headed (visível, sem abrir GUI):
  ```sh
  npm run cy:headed
  ```
- Executar apontando explicitamente a URL (ex.: ambiente local em 4000):
  ```sh
  npm run test-producao
  ```
Observações:
- O `baseUrl` está definido em [cypress.config.js](cypress.config.js) como `http://localhost:4000`. Se precisar alterar, atualize esse arquivo ou use variáveis de ambiente conforme necessário.

Documentação dos testes
-----------------------
- [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
  - Testa fluxo de login com credenciais válidas e inválidas.
  - Usa fixture [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json) para dados de usuário.
- [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js)
  - Testa fluxo de transferência entre contas após login.

Custom Commands
---------------
Os comandos customizados centralizam ações repetitivas e melhoram legibilidade dos testes:

- [`fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js)  
  Local: [cypress/support/commands/login.js](cypress/support/commands/login.js)  
  Descrição: realiza o preenchimento dos campos de usuário e senha com os valores da fixture `credenciais.valida` e submete o formulário de login.

- [`verificarMensagemNoToast`](cypress/support/commands/common.js)  
  Local: [cypress/support/commands/common.js](cypress/support/commands/common.js)  
  Descrição: verifica se o elemento `.toast` contém uma mensagem específica e está visível.

Estrutura de suporte
--------------------
- [cypress/support/commands.js](cypress/support/commands.js) importa e registra os comandos customizados:
  - [cypress/support/commands/common](cypress/support/commands/common.js)
  - [cypress/support/commands/login](cypress/support/commands/login.js)
  - [cypress/support/commands/transferencia](cypress/support/commands/transferencia.js)

Boas práticas e notas
---------------------
- Mantém-se a separação entre arranjo/ação/asserção nos testes (Arrange/Act/Assert).
- Capturas (screenshots) são utilizadas durante execução para auxiliar depuração (veja usos de `cy.screenshot(...)` em [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)).
- Ajuste o `baseUrl` caso o frontend esteja em outra porta/host.

Links úteis
-----------
- Repositório do frontend (banco-web): https://github.com/juliodelimas/banco-web  
- Repositório da API (banco-api): https://github.com/juliodelimas/banco-api

Contribuição
-----------
Abrir issues ou enviar pull requests com melhorias nos testes ou novos cenários.

Licença
-------
Projeto para fins de estudo.