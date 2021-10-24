import { HomePage } from "../pom/homePage";
import { Header } from "../pom/header";
import { ContactUs } from "../pom/contactUs"

const homePage = new HomePage();
const header = new Header();
const contactUs = new ContactUs();

describe('Contact Us button check', () => {
  it('Smoke - Contact Us page (UI, body, header, footer)', () => {

    homePage
      .visit()
      .checkPageUrl()
      .checkContainer();
    
    header.openCountactUs();

    contactUs
      .visit()
      .checkPageUrl()
      .checkContainer()
      .checkHeader()
      .checkFooter();
  });
});