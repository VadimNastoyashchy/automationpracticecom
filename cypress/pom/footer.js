import { BasePage } from "./base/basePage";

export class Footer extends BasePage {
  constructor() {
    super('#footer', 'Footer')
  }

  get newsLetterSection() {
    return this.container.find('#newsletter_block_left', { timeout: 10000 });
  }

  get searchInputField() {
    return this.newsLetterSection.find('#newsletter-input', { timeout: 10000 });
  }

  get submitButton() {
    return this.newsLetterSection.find('button[name="submitNewsletter"]', { timeout: 10000 });
  }

  get followUsSection() {
    return this.container.find('#social_block', { timeout: 10000 });
  }

  get facebookLink() {
    return this.followUsSection.find('li.facebook > a', { timaout: 5000 });
  }

  get twitterLink() {
    return this.followUsSection.find('li.twitter > a', { timaout: 5000 });
  }

  get youtubeLink() {
    return this.followUsSection.find('li.youtube > a', { timaout: 5000 });
  }

  get plusGoogleLink() {
    return this.followUsSection.find('li.google-plus > a', { timaout: 5000 });
  }

  get categorySection() {
    return this.container.find('.blockcategories_footer', { timaout: 5000 });
  }

  get womenSectionLink() {
    return this.categorySection.find('a[title*="You will find"]', { timaout: 5000 });
  }

  get informationSection() {
    return this.container.find('#block_various_links_footer', { timeout: 10000 });
  }

  get specials() {
    return this.informationSection.find('a[title="Specials"]', { timeout: 10000 });
  }

  get newProducts() {
    return this.informationSection.find('a[title="New products"]', { timeout: 10000 });
  }

  get bestSellers() {
    return this.informationSection.find('a[title="Best sellers"]', { timeout: 10000 });
  }

  get ourStores() {
    return this.informationSection.find('a[title="Our stores"]', { timeout: 10000 });
  }

  get contactUs() {
    return this.informationSection.find('a[title="Contact us"]', { timeout: 10000 });
  }

  get termsAndConditions() {
    return this.informationSection.find('a[title="Terms and conditions of use"]', { timeout: 10000 });
  }

  get aboutUs() {
    return this.informationSection.find('a[title="About us"]', { timeout: 10000 });
  }

  get sitemap() {
    return this.informationSection.find('a[title="Sitemap"]', { timeout: 10000 });
  }

  get myAccountSection() {
    return this.container.find('.footer-block', { timeout: 10000 });
  }

  get myOrders() {
    return this.myAccountSection.find('a[title="My orders"]', { timeout: 10000 });
  }

  get myCreditSlips() {
    return this.myAccountSection.find('a[title="My credit slips"]', { timeout: 10000 });
  }

  get myAdresses() {
    return this.myAccountSection.find('a[title="My addresses"]', { timeout: 10000 });
  }

  get myPersonalinfo() {
    return this.myAccountSection.find('a[title="Manage my personal information"]', { timeout: 10000 });
  }

  get storeInformationSection() {
    return this.container.find('#block_contact_infos', { timeout: 10000 });
  }

  get infoAddresses() {
    return this.storeInformationSection.find('li', { timeout: 3000 }).first();
  }

  get phoneNumber() {
    return this.storeInformationSection.find('li > span', { timeout: 10000 });
  }

  get infoEmail() {
    return this.storeInformationSection.find('li > span > a', { timeout: 10000 });
  }

  get corporateSection() {
    return this.container.find('.bottom-footer', { timeout: 10000 });
  }

  get year() {
    return this.corporateSection.find('div', { timeout: 10000 });
  }

  get createdBy() {
    return this.corporateSection.find('div > a', { timeout: 10000 });
  }

  checkNewsLetterSection() {
    cy.allure().startStep(`Check footer SearchField for placeholder text and Submit button`);
    this.newsLetterSection
      .should('exist')
      .should('be.visible')
    this.searchInputField
      .should('exist')
      .should('be.visible')
      .should('have.value', 'Enter your e-mail')
    this.submitButton
      .should('exist')
      .should('be.visible');
    cy.allure().endStep();

    return this;
  }

  checkFollowUsSection() {
    cy.allure().startStep(`Check Follow us section for social links`);
    this.followUsSection
      .should('exist')
      .should('be.visible')
    this.facebookLink
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.facebook.com/groups/525066904174158/')
    this.twitterLink
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://twitter.com/seleniumfrmwrk')
    this.youtubeLink
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA')
    this.plusGoogleLink
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://plus.google.com/111979135243110831526/posts')
    cy.allure().endStep();

    return this;
  }

  checkCategorySection() {
    cy.allure().startStep(`Check Categories section for existing links`);
    this.categorySection
      .should('exist')
      .should('be.visible')
    this.womenSectionLink
      .should('exist')
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=3&controller=category')
    cy.allure().endStep();

    return this;
  }

  checkInformationSection() {
    cy.allure().startStep(`Check Information section for existing links`);
    this.informationSection
      .should('exist')
      .should('be.visible')
    this.specials
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=prices-drop')
    this.newProducts
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=new-products')
    this.bestSellers
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=best-sales')
    this.ourStores
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=stores')
    this.contactUs
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=contact')
    this.termsAndConditions
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?id_cms=3&controller=cms')
    this.aboutUs
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?id_cms=4&controller=cms')
    this.sitemap
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=sitemap')
    cy.allure().endStep();

    return this;
  }

  checkMyAccountSection() {
    cy.allure().startStep(`Check Account section for “Specials”, “My orders“, “My credit slips“, “My addresses“, “My personal info“ links.`);
    this.myAccountSection
      .should('exist')
      .should('be.visible')
    this.myOrders
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=history')
    this.myCreditSlips
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=order-slip')
    this.myAdresses
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=addresses')
    this.myPersonalinfo
      .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=identity')
    cy.allure().endStep();

    return this;
  }

  checkStoreInformationSection() {
    cy.allure().startStep(`Check Information section for “Addresses”, “Phone number“, “Email“ links`);
    this.storeInformationSection
      .should('exist')
      .should('be.visible')
    this.infoAddresses
      .should('include.text', 'Selenium Framework, Research Triangle Park')
    this.phoneNumber
      .should('include.text', '(347) 466-7432')
    this.infoEmail
      .should('include.text', 'support@seleniumframework.com')
    cy.allure().endStep();

    return this;
  }

  checkCorporateSection() {
    cy.allure().startStep(`Check Corporate section for “Year” and “Created by”`);
    this.corporateSection
      .should('exist')
      .should('be.visible')
    this.year
      .should('include.text', '2014')
    this.createdBy
      .should('include.text', 'Ecommerce software by PrestaShop™')
    cy.allure().endStep();
  }
}