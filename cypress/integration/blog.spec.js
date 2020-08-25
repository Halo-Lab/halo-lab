describe('blog page', function() {
  beforeEach(function() {
    cy.visit('/blog/');
  });

  it('check articles render', function() {
    cy.contains('Our Blog').scrollIntoView();
    cy.contains('Agency').click();

    cy.get('article').should('be.visible');
  });

  //this test throw mistake if use async await
  // it('check one post render', function() {
  //   cy.get('[data-automation="articles"] h3 a').then(posts => {
  //     const postTitle = posts[0].innerText;
  //     cy.contains(postTitle).click();
  //     cy.get('h1').should(el => expect(el.first()).to.contain(postTitle));
  //   });
  // });
});
