export class BasePage {
  CONTAINER: string;
  PAGE_NAME: string;
  PAGE_URL: string;

  constructor(container: string, page_name: string, page_url?: string) {
    this.CONTAINER = container;
    this.PAGE_NAME = page_name;
    this.PAGE_URL = page_url;
  }

  protected get container(): Cypress.Chainable {
    return cy.get(this.CONTAINER, { timeout: 60000 });
  }

  public visit(): this {
    cy.allure().startStep(`Naviage and visit the page ${this.PAGE_URL}`)
    cy.visit(this.PAGE_URL);
    cy.allure().endStep();

    return this
  }

  public checkPageUrl(): this {
    cy.allure().startStep(`Check page url - ${this.PAGE_URL}`)
    cy.location('href', { timeout: 60000 }).should('include', this.PAGE_URL);
    cy.allure().endStep();

    return this
  }

  public checkContainer(): this {
    cy.allure().startStep(`Check page container ${this.PAGE_NAME}, to exist and to be visible`)
    this.container
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }
}