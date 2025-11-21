Cypress.Commands.add('verificarMensagemNoToast', (msg)=>{
        cy.get(".toast").should("have.text", msg).should("be.visible");
})