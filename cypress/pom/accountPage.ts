import { should } from "chai";
import { BasePage } from "./base/basePage";

export class AccountPage extends BasePage {
  constructor() {
    super('#my-account', 'AccountPage', 'index.php?controller=my-account')
  }

  private get userInfo(): Cypress.Chainable {
    return this.container.find('a[title = "View my customer account"]', { timeout: 10000 })
  }

  private get bodyText(): Cypress.Chainable {
    return this.container.find('#center_column', { timeout: 10000 })
  }

  public checkUserInfo(): this {
    cy.allure().startStep(`Check user Info in header`)
    this.userInfo
      .contains('John Wick');
    cy.allure().endStep();

    return this;
  }

  public checkBodyText(): this {
    cy.allure().startStep(`Check for existing text in the body`)
    this.bodyText
      .contains('Welcome to your account. Here you can manage all of your personal information and orders.')
    cy.allure().endStep();

    return this;
  }
}