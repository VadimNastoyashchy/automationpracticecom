import { BasePage } from "./base/basePage"

export class SignInPage extends BasePage {
  constructor() {
    super('#authentication', 'SignIn', 'index.php?controller=authentication&back=my-account')
  }

  private get loginForm(): Cypress.Chainable {
    return this.container.find('#login_form', { timeout: 10000 });
  }

  private get emailField(): Cypress.Chainable {
    return this.loginForm.find('input[name = "email"]', { timeout: 10000 });
  }

  private get passwordField(): Cypress.Chainable {
    return this.loginForm.find('input[name = "passwd"]', { timeout: 10000 });
  }

  private get forgotPassword(): Cypress.Chainable {
    return this.loginForm.find('p.lost_password > a', { timeout: 10000 });
  }

  private get signInButton(): Cypress.Chainable {
    return this.loginForm.find('button[name = "SubmitLogin"]', { timeout: 10000 });
  }

  public checkLoginForm(): this {
    cy.allure().startStep(`Check login form, email and password`)
    this.loginForm
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public checkEmailField(): this {
    cy.allure().startStep(`Check email field`);
    this.emailField
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public checkPasswordField(): this {
    cy.allure().startStep(`Check password field`);
    this.passwordField
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public checkForgotPasswordLink(): this {
    cy.allure().startStep(`Check forgot password field`);
    this.forgotPassword
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=password');
    cy.allure().endStep();

    return this;
  }

  public checkSignInButton(): this {
    cy.allure().startStep(`Check Sign In button`);
    this.signInButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  public fillLoginField(): this {
    cy.allure().startStep(`Type data in to Login Field`);
    this.emailField
      .clear()
      .type('automationpractice@ukr.net');
    cy.allure().endStep();

    return this;
  }

  public fillPasswordField(): this {
    cy.allure().startStep(`Type data in to password field`);
    this.passwordField
      .clear()
      .type('simple_automation_com_2021');
    cy.allure().endStep();

    return this;
  }

  public clickSignInButton(): void {
    cy.allure().startStep(`Click Sign in button`);
    this.signInButton
      .click();
    cy.allure().endStep();
  }
}