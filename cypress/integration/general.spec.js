describe('general site test cases', function() {
  beforeEach(function() {
    cy.visit(`/`);
  });

  it('checks that menu works', function() {
    cy.contains('Menu').click();
    cy.contains('Services').click();
    cy.contains(
      'We make the collaboration of people and interface more intensive and exciting.'
    ).should('be.visible');
  });

  it('checks that contact header button redirects to contacts page', function() {
    cy.contains('Contact').click();
    cy.contains('Email us:').should('be.visible');
  });
});
