describe('portfolio page', function() {
  beforeEach(function() {
    cy.visit(`portfolio/`);
  });

  it('loads more shots after click on show more button in dribbble shots sections', function() {
    cy.contains('Design that inspires').scrollIntoView();
    cy.get('[data-automation="dribble-shots"]').should($p => {
      expect($p).to.have.length(8);
    });
    cy.contains('INSPIRE MORE').click();
    cy.get('[data-automation="dribble-shots"]').should($p => {
      expect($p).to.have.length(16);
    });
  });
});
