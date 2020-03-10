describe('contacts page', function() {
  it('form send', function() {
    cy.visit(`${Cypress.env('host')}contacts/`);
    cy.contains('REQUEST A QUOTE').scrollIntoView();
    cy.contains('Full Name')
      .click()
      .type('Tony Stark');
    cy.contains('Company')
      .click()
      .type('Stark Industries');
    cy.contains('Email')
      .click()
      .type('tony_stark@gmail.com');
    cy.contains('What is your project about?')
      .click()
      .type('Some charming message');
    cy.contains('submit').click();
    cy.contains('Thank you for your request').should('be.visible');
  });
});
