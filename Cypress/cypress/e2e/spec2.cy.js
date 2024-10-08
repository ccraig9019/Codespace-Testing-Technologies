describe('Cypress First tests - Activity 2', () => {
  it('Visit Actions page, query for email input field, enter my email address and assert about the content of the field', ()=> {
    //Visit the page
    cy.visit('https://example.cypress.io/commands/actions');
    //Query for email field and input email address
    cy.get('.action-email').type('test@testmail.com');
    //Assert about content of the input field
    cy.get('.action-email').should('have.value', 'test@testmail.com');

  })
})