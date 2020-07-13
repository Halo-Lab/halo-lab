describe('contacts page', function() {
  beforeEach(function() {
    cy.visit('contacts/');
  });

  it('sends contacts form', function() {
    cy.contains('REQUEST A QUOTE').scrollIntoView();

    cy.get('form').within(() => {
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
    });

    cy.contains('Thank you for your request').should('be.visible');
  });
});
