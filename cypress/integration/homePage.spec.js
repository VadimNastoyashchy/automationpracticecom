import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { Footer } from "../pom/footer";

const homePage = new HomePage();
const header = new Header();
const footer = new Footer();

describe('Home page tests', () => {
  it('Smoke - Home page (UI, body, header, footer', () => {
    homePage
      .visit()
      .checkPageUrl();

    header
      .checkContainer();

    footer
      .checkContainer();
  });
});