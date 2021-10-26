import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { ContactUs } from "../pom/contactUs";
import { Footer } from "../pom/footer";

const homePage = new HomePage();
const header = new Header();
const contactUs = new ContactUs();
const footer = new Footer();

describe('Contact Us tests', () => {
  it('Smoke - Contact Us page (UI, body, header, footer)', () => {

    homePage
      .visit()
      .checkPageUrl()
      .checkContainer();
    
    header
      .clickOnContactUsLink();

    contactUs
      .checkPageUrl()
      .checkContainer();

    header
      .checkContainer();

    footer
      .checkContainer();
  });
});