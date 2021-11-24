import { SignInPage } from "../pom/signIn";
import { AccountPage } from "../pom/accountPage";
import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { WomenPage } from "../pom/womenPage";
import { ShoppingCardSum } from "../pom/shoppingCardSum";

const signInPage = new SignInPage();
const accountPage = new AccountPage();
const homePage = new HomePage();
const header = new Header();
const womenPage = new WomenPage();
const shoppingCardSum = new ShoppingCardSum();

describe('User Order flow tests', () => {
  it('Smoke - Order flow (order user scenario)', () => {
    cy.allure().tms('Smoke Home Page', 'AUT-9');
    homePage
      .visit()
      .checkPageUrl();

    header
      .clickSignInLink();

    signInPage
      .fillLoginField()
      .fillPasswordField()
      .clickSignInButton();

    accountPage
      .checkContainer()
      .checkUserInfo('John Wick')
      .checkBodyText()
      .clickWomanSection();

    womenPage
      .checkContainer()
      .checkPageTitle()
      .addProductItem()
      .checkContinueShoppingButton()
      .checkCProceedToCheckoutButton()
      .checkCloseButton()
      .clickProceedButton();

    shoppingCardSum
      .checkContainer()
      .checkPageTitle()
      .checkCheckoutButton();
  });
});