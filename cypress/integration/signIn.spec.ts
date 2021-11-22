import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { Footer } from "../pom/footer";
import { SignInPage } from "../pom/signIn";

const homePage = new HomePage();
const header = new Header();
const signInPage = new SignInPage();
const footer = new Footer();

describe('Sign In tests', () => {
  it('Smoke - Sign In page (UI, body, header, footer)', () => {
    cy.allure().tms('Smoke Sign in', 'AUT-5');
    homePage
      .visit()
      .checkPageUrl()
      .checkContainer();

    header
      .clickSignInLink();

    signInPage
      .checkPageUrl()
      .checkContainer();

    header
      .checkContainer();

    footer
      .checkContainer();

    signInPage
      .checkLoginForm();

  });
});
