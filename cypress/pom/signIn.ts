import { should } from "chai";
import { BasePage } from "./base/basePage"

export class SignInPage extends BasePage {
  constructor() {
    super('#authentication', 'SignIn', 'index.php?controller=authentication&back=my-account')
  }

  private get loginForm(): Cypress.Chainable {
    return this.container.find('#login_form', { timeout: 10000 })
  }

  private get emailField(): Cypress.Chainable {
    return this.loginForm.find('input[name = "email"]', { timeout: 10000 });
  }

  private get passwordField(): Cypress.Chainable {
    return this.loginForm.find('input[name = "passwd"]', { timeout: 10000 });
  }

  private get forgotPassword(): Cypress.Chainable {
    return this.loginForm.find('p.lost_password > a');
  }

  private get signInButton(): Cypress.Chainable {
    return this.loginForm.find('button[name = "SubmitLogin"]')
  }

  private get myAccountPage(): Cypress.Chainable {
    return cy.get('#my-account');
  }

  public checkLoginForm(): this {
    cy.allure().startStep(`Check login form, email and password`)
    this.loginForm
      .should('exist')
      .should('be.visible');
    this.emailField
      .should('exist')
      .should('be.visible');
    this.passwordField
      .should('exist')
      .should('be.visible');
    this.forgotPassword
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=password');
    this.signInButton
      .should('exist')
      .should('be.visible')
    this.emailField
      .type('automationpractice@ukr.net')
    this.passwordField
      .type('simple_automation_com_2021')
    this.signInButton
      .click()
      .url().should('eq', 'http://automationpractice.com/index.php?controller=my-account')
      .request('http://automationpractice.com/index.php?controller=my-account')
      .its('body')
      .should('include', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    cy.allure().endStep();

    return this;
  }

}