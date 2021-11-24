import { BasePage } from "./base/basePage";

export class ShoppingCardSum extends BasePage {
  constructor() {
    super('#order', 'ShoppingCardSum', 'index.php?controller=order');
  }

  private get pageTitle(): Cypress.Chainable {
    return this.container.find('h1[id="cart_title"]', { timeout: 10000 });
  }

  private get checkoutButton(): Cypress.Chainable {
    return this.container.find('a[title="Proceed to checkout"]', { timeout: 10000 });
  }

  public checkPageTitle(): this {
    cy.allure().startStep('Check Page titles');
    this.pageTitle
      .contains('Shopping-cart summary')
      .contains('Your shopping cart contains:');
    cy.allure().endStep();

    return this;
  }

  public checkCheckoutButton(): this {
    cy.allure().startStep('Check for checkout button on the page');
    this.checkoutButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

};

