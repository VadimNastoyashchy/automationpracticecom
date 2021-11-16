import { BasePage } from "./base/basePage";

export class Header extends BasePage {
  constructor() {
    super('#header', 'Header')
  }

  get contactUsLink() {
    return this.container.find('#contact-link', {timeout: 10000})
  }

  get signInLink() {
    return this.container.find('.header_user_info', {timeout: 10000})
  }

  get saleBanner() {
    return this.container.find('.banner', {timeout: 10000});
  }

  get phoneLink() {
    return this.container.find('.shop-phone', {timeout: 10000});
  }

  get headerLogo() {
    return this.container.find('#header_logo', {timeout: 10000})
  }

  get searchField() {
    return this.container.find('#searchbox', {timeout: 10000})
  }

  get searchButton() {
    return this.searchField.find('button[name="submit_search"]', {timeout: 10000});
    }

  get searchInputField () {
    return this.searchField.find('#search_query_top', {timeout: 10000});
  }

  get cartElement() {
    return this.container.find('.shopping_cart', {timeout: 10000})
  }

  get menuSection() {
    return this.container.find('#block_top_menu', {timeout: 10000})
  }



  clickOnContactUsLink() {
    cy.allure().startStep(`Check header Contact Us Link for open on current tab`)
    this.contactUsLink.not('[target="_blank"]')
    .should('exist')
    .should('be.visible');
    cy.allure().endStep();

    return this
  }

  clickSignInLink() {
    cy.allure().startStep(`Check header SignIn Link for open on current tab`)
    this.signInLink.not('[target="_blank"]')
    .should('exist')
    .should('be.visible');
    cy.allure().endStep();

    return this
  }

  checkSaleBanner() {
    cy.allure().startStep(`Check header Sale Banner for visibility`)
    this.saleBanner
    .should('exist')
    .should('be.visible');
    cy.allure().endStep();

    return this
  }

  checkPhone() {
    cy.allure().startStep(`Check header phone link to contain 'Call us now:' and '0123-456-789'`)
    this.phoneLink
    .should('exist')
    .should('be.visible')
    .contains('Call us now:')
    .contains('0123-456-789');
    cy.allure().endStep();

    return this
  }

  checkHeaderLogo() {
    cy.allure().startStep(`Check header Logo visibility`)
    this.headerLogo
    .should('exist')
    .should('be.visible');
    cy.allure().endStep();

    return this
  }

  checkSearchField() {
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

  checkCart() {
    cy.allure().startStep(`Check header Cart for visibility`)
    this.cartElement
    .should('exist')
    .should('be.visible');
    cy.allure().endStep();

    return this
  }

  checkMenu() {
    cy.allure().startStep(`Check header Menu to contain: Women, Dresses, T-shirts`)
    this.menuSection
    .should('exist')
    .should('be.visible')
    .should('contain', 'Women')
    .should('contain', 'Dresses')
    .should('contain', 'T-shirts')
    cy.allure().endStep();

    return this
  }
}