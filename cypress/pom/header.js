import { BasePage } from "./base/basePage";

export class Header extends BasePage {
  constructor() {
    super('#header')
  }

  openCountactUs() {
    cy.get('#contact-link').click();
  }
}