describe('Cypress First Tests - Activity 1', () => {
  it('Visits the Cypress kitchen sink page, queries and interacts with an element', ()=> {
    //Visit the page
    cy.visit('https://example.cypress.io')
    //Query an element and interact with it
    cy.get(".home-list").contains("Querying").click(); //class names are preceded by .
    //Assert the content (say what you expect, what SHOULD happen)
    cy.url().should("include", "/commands/querying")
    cy.get("h1").should("contain", "Querying");
  })
})