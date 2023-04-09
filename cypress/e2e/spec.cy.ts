describe('template spec', () => {

  it('passes', () => {
    cy.visit('/')
    cy.get("input")
        .type("Castelvania{enter}")
        .should("have.value", "Castelvania");
  });

});