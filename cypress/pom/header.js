import { BasePage } from "./base/basePage";

export class Header extends BasePage {
  constructor() {
    super('#header', 'Header')
  }

  get contactUsLink() {
    return this.container.find('#contact-link', {timeout: 10000});
  }

  get signInLink() {
    return this.container.find('.header_user_info', {timeout: 10000});
  }

  clickOnContactUsLink() {
    this.contactUsLink.click();
  }

  clickSignInLink() {
    this.signInLink.click();
  }
}