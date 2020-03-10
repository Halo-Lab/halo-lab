describe('blog page', function() {
  it('Check page rendering', function() {
    cy.visit('http://localhost:8000/blog');
    cy.contains('With Love from Halo Lab').scrollIntoView({
      duration: 2000,
    });
  });
  it('check filter', function() {
    cy.contains('Our Blog').scrollIntoView({
      duration: 1500,
    });
    cy.wait(1000);
    cy.contains('Agency').click();
    cy.wait(1000);
    cy.contains('Case Studies').click();
    cy.wait(1000);
    cy.contains('News').click();
    cy.wait(1000);
    cy.contains('Agency').click();
  });
});
