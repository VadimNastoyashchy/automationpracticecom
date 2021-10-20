import { HomePage } from "../pom/homePage";
import { PageHeader } from "../pom/header";
import { PageFooter } from "../pom/footer";

const homePage = new HomePage();
const pageHeader = new PageHeader();
const pageFooter = new PageFooter();

describe('Home page tests', () => {
  it('Smoke - Home page (UI, body, header, footer', () => {
    homePage
      .visit()
      .checkPageUrl();

    pageHeader.checkHeaderVisible();
    pageFooter.checkFooterVisible();
  });
});


/*
    cy.visit('/index.php');
    cy.url().should('eq', 'http://automationpractice.com/index.php');
    cy.get('body')
      .find('header')
      .should('be.visible');
    cy.get('body')
      .find('footer')
      .should('be.visible');
*/