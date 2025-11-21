describe("Login", () => {
  beforeEach(() => {
    //por estar no before each roda antes de cada it, não precisando estar dentro do it.
    //Arrange
    cy.visit("/");
    // comando cy.visit só precisa do '/' pois estou usando base ur no cypress.config.js
    //para usar variavel de ambiente nativo do cypress configurado no package json:
    //cy.visit(Cypress.env('URL')); 
    cy.screenshot("apos-visitar-pagina");
  });

  it("Login com dados validos deve permitir entrada no sistema", () => {
    //Act
    cy.fazerLoginComCredenciaisValidas()
    //cy.screenshot("apos-logar");

    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados invalidos deve apresentar mensagem de error", () => {
    //Act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.invalida.usuario);
      cy.get("#senha").click().type(credenciais.invalida.senha);
    });
    cy.screenshot('apos-digitar-dados-invalidos')
    cy.get("#login-section > .btn").click();

    //Assert
    cy.get(".toast")
      .should("have.text", "Erro no login. Tente novamente.")
      .should("be.visible");

    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  });
});
