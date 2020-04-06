describe('services page', function() {
  beforeEach(function() {
    cy.visit('services/');
  });

  it('check flow tabs', function() {
    cy.contains('With Love from Halo Lab').scrollIntoView();
    //maybe this is problem react-tabs, but click doesn't work without double click
    cy.contains('Testing')
      .click()
      .click();
    cy.contains(
      'The most important stage of any product creation is testing. The main types of testing: QA, responsive testing for all devices and code-review. '
    ).should('be.visible');
  });

  it('check technologies tabs', function() {
    cy.contains('Databases')
      .click()
      .click();
    cy.contains('MongoDB').should('be.visible');
  });
});
