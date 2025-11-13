describe("Login", () => {
  it("Login com dados validos deve permitir entrada no sistema", () => {
    //Arrange
    cy.visit("http://localhost:4000");

    //Act
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  });

  it("Login com dados invalidos deve apresentar mensagem de error", () => {
    //Arrange
    cy.visit("http://localhost:4000");

    //Act
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("654321");
    cy.get('#login-section > .btn').click()

    //Assert
    cy.get('.toast')
      .should('have.text','Erro no login. Tente novamente.' )
      .should('be.visible')
      
  });

});
