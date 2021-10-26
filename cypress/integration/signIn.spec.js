import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { Footer } from "../pom/footer";
import { SignIn } from "../pom/signIn";

const homePage = new HomePage();
const header = new Header();
const signIn = new SignIn();
const footer = new Footer();

describe('Sign In tests', () => {
  it('Smoke - Sign Is page (UI, body, header, footer)', () => {

    homePage
      .visit()
      .checkPageUrl()
      .checkContainer();
    
    header
      .clickSignInLink();

    signIn
      .checkPageUrl()
      .checkContainer();

    header
      .checkContainer();

    footer
      .checkContainer();
  });
});