import { BasePage } from "./base/basePage";

export class Header extends BasePage {
  constructor() {
    super('#header', 'Header')
  }

  private get contactUsLink(): Cypress.Chainable {
    return this.container.find('#contact-link', { timeout: 10000 })
  }

  private get signInLink(): Cypress.Chainable {
    return this.container.find('.header_user_info', { timeout: 10000 })
  }

  private get saleBanner(): Cypress.Chainable {
    return this.container.find('.banner', { timeout: 10000 });
  }

  private get phoneLink(): Cypress.Chainable {
    return this.container.find('.shop-phone', { timeout: 10000 });
  }

  private get headerLogo(): Cypress.Chainable {
    return this.container.find('#header_logo', { timeout: 10000 })
  }

  private get searchField(): Cypress.Chainable {
    return this.container.find('#searchbox', { timeout: 10000 })
  }

  private get searchButton(): Cypress.Chainable {
    return this.searchField.find('button[name="submit_search"]', { timeout: 10000 });
  }

  private get searchInputField(): Cypress.Chainable {
    return this.searchField.find('#search_query_top', { timeout: 10000 });
  }

  private get cartElement(): Cypress.Chainable {
    return this.container.find('.shopping_cart', { timeout: 10000 })
  }

  private get menuSection(): Cypress.Chainable {
    return this.container.find('#block_top_menu', { timeout: 10000 })
  }

  public clickOnContactUsLink(): this {
    cy.allure().startStep(`Click header Contact Us Link for open on current tab`)
    this.contactUsLink.click();
    cy.allure().endStep();

    return this
  }

  public checkOnContactUsLink(): this {
    cy.allure().startStep(`Check header Contact Us Link for open on current tab`)
    this.contactUsLink.not('[target="_blank"]')
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public clickSignInLink(): this {
    cy.allure().startStep(`Click header SignIn Link for open on current tab`)
    this.signInLink.click()
    cy.allure().endStep();

    return this
  }

  public checkSignInLink(): this {
    cy.allure().startStep(`Check header SignIn Link for open on current tab`)
    this.signInLink.not('[target="_blank"]')
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public checkSaleBanner(): this {
    cy.allure().startStep(`Check header Sale Banner for visibility`)
    this.saleBanner
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public checkPhone(): this {
    cy.allure().startStep(`Check header phone link to contain 'Call us now:' and '0123-456-789'`)
    this.phoneLink
      .should('exist')
      .should('be.visible')
      .contains('Call us now:')
      .contains('0123-456-789');
    cy.allure().endStep();

    return this
  }

  public checkHeaderLogo(): this {
    cy.allure().startStep(`Check header Logo visibility`)
    this.headerLogo
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public checkSearchField(): this {
    cy.allure().startStep(`Check header SearchField for placeholder text and Search button`)
    this.searchField
      .should('exist')
      .should('be.visible')
    this.searchInputField
      .should('exist')
      .should('be.visible')
      .invoke('attr', 'placeholder')
      .should('contain', 'Search')
    this.searchButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public checkCart(): this {
    cy.allure().startStep(`Check header Cart for visibility`)
    this.cartElement
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this
  }

  public checkMenu(): void {
    cy.allure().startStep(`Check header Menu to contain: Women, Dresses, T-shirts`)
    this.menuSection
      .should('exist')
      .should('be.visible')
      .should('contain', 'Women')
      .should('contain', 'Dresses')
      .should('contain', 'T-shirts')
    cy.allure().endStep();
  }
}