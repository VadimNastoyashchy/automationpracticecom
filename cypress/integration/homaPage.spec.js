describe('general smoke test of main page', () => {
  it('Main page test', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.url().should('eq', 'http://automationpractice.com/index.php');
  }); // not shure understand about "content is visible" for home page
  
  it('Header test', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('body')
      .find('header')
      .should('be.visible');
  });

  it('Footer test', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('body')
      .find('footer')
      .should('be.visible');
  });
});