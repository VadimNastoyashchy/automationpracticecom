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

  get banner() {
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

  get cartElement() {
    return this.container.find('.shopping_cart', {timeout: 10000})
  }

  get menuSection() {
    return this.container.find('#block_top_menu', {timeout: 10000})
  }

  clickOnContactUsLink() {
    cy.allure().startStep(`Check header Contact Us Link`)
    this.contactUsLink.not('[target="_blank"]').click()
    cy.allure().endStep();
  }

  clickSignInLink() {
    cy.allure().startStep(`Check header SignIn Link`)
    this.signInLink.not('[target="_blank"]').click()
    cy.allure().endStep();
  }

  checkBanner() {
    cy.allure().startStep(`Check header Banner`)
    this.banner.should('exist').should('be.visible');
    cy.allure().endStep();
  }

  checkPhone() {
    cy.allure().startStep(`Check header phone link`)
    this.phoneLink.should('exist').should('be.visible').contains('Call us now:').contains('0123-456-789');
    cy.allure().endStep();
  }

  checkHeaderLogo() {
    cy.allure().startStep(`Check header Logo`)
    this.headerLogo.should('exist').should('be.visible');
    cy.allure().endStep();
  }

  checkSearchField() {
    cy.allure().startStep(`Check header SearchField`)
    this.searchField
    .should('exist')
    .should('be.visible')
    .get('#search_query_top').invoke('attr', 'placeholder').should('contain', 'Search')
    .get('#searchbox').find('.btn').click()
    cy.allure().endStep();
  }

  checkCart() {
    cy.allure().startStep(`Check header Cart`)
    this.cartElement.should('exist').should('be.visible');
    cy.allure().endStep();
  }

  checkMenu() {
    cy.allure().startStep(`Check header Menu`)
    this.menuSection.should('exist').should('be.visible')
    .should('contain', 'Women')
    .should('contain', 'Dresses')
    .should('contain', 'T-shirts')
    cy.allure().endStep();
  }
}