import { HomePage } from "../pom/homePage";

const homePage = new HomePage();

describe('Home page tests', () => {
  it('Smoke - Home page (UI, body, header, footer', () => {  

    homePage
      .visit()
      .checkPageUrl();

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
