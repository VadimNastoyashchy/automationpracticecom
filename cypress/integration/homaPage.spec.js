describe('Home page tests', () => {
  it('Smoke - Home page (UI, body, header, footer', () => {
    cy.visit('/index.php');
    cy.url().should('eq', 'http://automationpractice.com/index.php');
    cy.get('body')
      .find('header')
      .should('be.visible');
    cy.get('body')
      .find('footer')
      .should('be.visible');
  });
});
