import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";

const homePage = new HomePage();
const header = new Header();

describe('Home page header tests', () => {
  it('Smoke - Home page Header tests', () => {
    cy.allure().tms('Smoke - Home page Header', 'AUT-6');
    homePage
      .visit()
      .checkPageUrl()
      
    header
      .checkContainer()
      .checkSaleBanner()
      .checkOnContactUsLink()
      .checkSignInLink()
      .checkPhone()
      .checkHeaderLogo()
      .checkSearchField()
      .checkCart()
      .checkMenu()
  });
});
