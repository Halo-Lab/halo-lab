describe('homepage', function() {
  beforeEach(function() {
    cy.visit(`/`);
  });

  it('test more posts link in blog section', function() {
    cy.contains(
      'Front-end & back-end expertise from development to delivery'
    ).scrollIntoView();
    cy.contains('MORE BLOG POSTS').click();
    cy.contains('Our Blog').should('be.visible');
  });

  it('test more posts link in blog section', function() {
    cy.contains(
      'Front-end & back-end expertise from development to delivery'
    ).scrollIntoView();

    cy.get('[data-automation="post-preview"] h3 a').then(posts => {
      const postTitle = posts[0].innerText;
      cy.contains(postTitle).click();
      cy.get('h2').should(el => expect(el.first()).to.contain(postTitle));
    });
  });
});
