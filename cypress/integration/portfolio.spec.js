describe('portfolio page', function() {
  it('Check page rendering', function() {
    cy.visit(`${Cypress.env('host')}portfolio/`);
    cy.contains('Design that inspires').scrollIntoView();
  });
  it('check show more', function() {
    cy.contains('Design that inspires').scrollIntoView();
    cy.get('[data-list="dribble-shots"]').should($p => {
      expect($p).to.have.length(8);
    });
    cy.contains('INSPIRE MORE').click();
    cy.get('[data-list="dribble-shots"]').should($p => {
      expect($p).to.have.length(16);
    });
  });
});
