describe('services page', function() {
  it('Check page rendering', function() {
    cy.visit('http://localhost:8000/services/');
    cy.contains('With Love from Halo Lab').scrollIntoView({
      duration: 2000,
    });
  });
  it('check flow tabs', function() {
    cy.contains('Our Flow').scrollIntoView({ duration: 1500 });
    cy.wait(800);
    cy.contains('Development').click();
    cy.wait(800);
    cy.contains('Testing').click();
    cy.wait(800);
    cy.contains('Support').click();
    cy.wait(800);
    cy.contains('Design').click();
  });
  it('check technologies tabs', function() {
    cy.contains('Technologies').scrollIntoView({ duration: 1500 });
    cy.wait(800);
    cy.contains('Mobile').click();
    cy.wait(800);
    cy.contains('Front-end').click();
    cy.wait(800);
    cy.contains('Databases').click();
    cy.wait(800);
    cy.contains('Back-end').click();
  });
});
