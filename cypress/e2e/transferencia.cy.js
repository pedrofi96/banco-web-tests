describe("Transferencias", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.valida.usuario);
      cy.get("#senha").click().type(credenciais.valida.senha);
    });
    cy.get("#login-section > .btn").click();
    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Deve transferir quando informo valores válidos", () => {
    cy.get('label[for="conta-origem"]').parent().as("campo-conta-origem");
    cy.get("@campo-conta-origem").click();
    cy.get("@campo-conta-origem").contains("Maria").click();

    cy.get('label[for="conta-destino"]').parent().as("campo-conta-destino");
    cy.get("@campo-conta-destino").click();
    cy.get("@campo-conta-destino").contains("João").click();

    cy.get("#valor").click().type('10');

    cy.contains('button', 'Transferir').click()

    cy.get('.toast').should('have.text', 'Transferencia Realizada!')
  });
});
