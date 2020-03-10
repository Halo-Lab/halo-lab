describe('portfolio page', function() {
  it('Check page rendering', function() {
    cy.visit('http://localhost:8000/portfolio/');
    cy.contains('Design that inspires').scrollIntoView({ duration: 2000 });
  });
  it('check show more', function() {
    cy.contains('Design that inspires').scrollIntoView({ duration: 1500 });
    cy.wait(800);
    cy.contains('INSPIRE MORE').click();
    cy.wait(800);
    cy.contains('INSPIRE MORE').click();
  });
});
