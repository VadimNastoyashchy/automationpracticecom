import { BasePage } from "./base/basePage";

export class Header extends BasePage {
  constructor() {
    super('#header')
  }

  get contactUsLink() {
    return this.container.find('#contact-link', {timeout: 10000});
  }

  clickOnContactUsLink() {
    this.contactUsLink.click();
  }
}