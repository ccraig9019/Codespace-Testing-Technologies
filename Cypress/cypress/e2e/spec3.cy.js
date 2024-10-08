describe('Cypress First tests - Activity 3', () => {
  it('Visit the page, query for a buttyon with class .action-btn, click it, query for #action canvas, click on topLeft, query for #action-canvas and click on bottomRight', ()=> {
    //Visit the page
    cy.visit('https://example.cypress.io/commands/actions');
    //Query for buttons and click on them
    cy.get('.action-btn').click();
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('bottomRight');
    })
})