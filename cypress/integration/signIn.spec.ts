import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { Footer } from "../pom/footer";
import { SignInPage } from "../pom/signIn";
import { AccountPage } from "../pom/accountPage";

const homePage = new HomePage();
const header = new Header();
const signInPage = new SignInPage();
const footer = new Footer();
const accountPage = new AccountPage();

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
  });

  it('Smoke - Sign in page (Valid data)', () => {
    cy.allure().tms('Smoke - Sign in page (Valid data)', 'AUT-8');
    homePage
      .visit()
      .checkPageUrl()
      .checkContainer();

    header
      .clickSignInLink();

    signInPage
      .checkPageUrl()
      .checkContainer()
      .checkLoginForm()
      .checkEmailField()
      .checkPasswordField()
      .checkForgotPasswordLink()
      .checkSignInButton()
      .fillLoginField()
      .fillPasswordField()
      .clickSignInButton();

    accountPage
      .checkContainer()
      .checkUserInfo('John Wick')
      .checkBodyText();
  });
});
