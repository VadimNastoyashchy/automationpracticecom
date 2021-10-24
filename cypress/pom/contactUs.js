import { BasePage } from "./base/basePage";

export class ContactUs extends BasePage {
  constructor() {
    super('#contact', 'ContactUs', 'index.php?controller=contact')
  }

  checkHeader() {
    cy.get('#header')
      .should('exist')
      .should('be.visible');
    
    return this;
  }

  checkFooter() {
    cy.get('#footer')
      .should('exist')
      .should('be.visible');
  }
}