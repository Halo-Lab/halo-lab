describe('blog page', function() {
  it('Check page rendering', function() {
    cy.visit(`/blog/`, { timeout: 80000 });
    cy.contains('With Love from Halo Lab').scrollIntoView();
  });

  it('check articles render', function() {
    cy.contains('Our Blog').scrollIntoView();
    cy.contains('Agency').click();
    cy.get('article').should('be.visible');
  });

  //this test throw mistake if use async await
  it('check one post render', function() {
    cy.get('[data-list-item="articles"] h3 a').then(posts => {
      const postTitle = posts[0].innerText;
      cy.contains(postTitle).click();
      cy.get('h2').should(el => expect(el.first()).to.contain(postTitle));
    });
  });
});
