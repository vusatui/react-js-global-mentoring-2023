describe('template spec', () => {

  it('passes', () => {
    cy.visit('/')
    cy.get("input")
        .type("Castelvania{enter}")
        .should("have.value", "Castelvania");
  });

  it("filters", () => {
    cy.visit('/');
    cy.contains('Comedy')
        .click({force: true});
  });

});