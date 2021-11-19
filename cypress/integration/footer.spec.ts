import { HomePage } from "../pom/homePage";
import { Footer } from "../pom/footer";

const homePage = new HomePage();
const footer = new Footer();

describe('Home page Footer test', () => {
  it('Smoke - Home page Footer tests', () => {
    cy.allure().tms('Smoke - Home page Header', 'AUT-7');
    homePage
      .visit()
      .checkPageUrl()

    footer
      .checkContainer()
      .checkNewsLetterSection()
      .checkFollowUsSection()
      .checkCategorySection()
      .checkInformationSection()
      .checkMyAccountSection()
      .checkStoreInformationSection()
      .checkCorporateSection()
  });
});
