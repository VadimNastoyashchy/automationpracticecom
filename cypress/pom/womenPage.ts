import { BasePage } from "./base/basePage";

export class WomenPage extends BasePage {
  constructor() {
    super('#category', 'WomenPage', 'index.php?id_category=3&controller=category');
  }

  private get pageTitle(): Cypress.Chainable {
    return this.container.find('.page-heading', { timeout: 10000 });
  }

  private get productItem(): Cypress.Chainable {
    return this.container.find('a[data-id-product="1"]', { timeout: 10000 }).first();
  }

  private get itemWindow(): Cypress.Chainable {
    return this.container.find('#layer_cart', { timeout: 10000 })
  }

  private get proceedToCheckoutButton(): Cypress.Chainable {
    return this.itemWindow.find('a[title="Proceed to checkout"]', { timeout: 10000 });
  }

  private get continueShoppingButton(): Cypress.Chainable {
    return this.itemWindow.find('span[title="Continue shopping"]', { timeout: 10000 });
  }

  private get closeButton(): Cypress.Chainable {
    return this.itemWindow.find('span[title="Close window"]', { timeout: 10000 });
  }

  public checkPageTitle(): this {
    cy.allure().startStep('Check page title');
    this.pageTitle
      .contains('Women');
    cy.allure().endStep();

    return this;
  }

  public addProductItem(): this {
    cy.allure().startStep('Add product item');
    this.productItem
      .click({ force: true });

    this.itemWindow
      .contains('Product successfully added to your shopping cart');
    cy.allure().endStep();

    return this;
  }

  public checkContinueShoppingButton(): this {
    cy.allure().startStep('Check Continue Shopping Button');
    this.continueShoppingButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public checkCProceedToCheckoutButton(): this {
    cy.allure().startStep('Check Proceed To Checkout Button');
    this.proceedToCheckoutButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public checkCloseButton(): this {
    cy.allure().startStep('Check Close Button');
    this.closeButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public clickProceedButton(): void {
    cy.allure().startStep('Click to Proceed Button');
    this.proceedToCheckoutButton
      .click();
    cy.allure().endStep();
  }

}