export class BasePage {
    CONTAINER;
    PAGE_NAME;
    PAGE_URL;

    constructor(container, page_name, page_url){
        this.CONTAINER = container;
        this.PAGE_NAME = page_name;
        this.PAGE_URL = page_url;
    }

    get container() {
      return cy.get(this.CONTAINER, {timeout: 60000});
    }

    visit() {
        cy.allure().startStep(`Naviage and visit the page ${this.PAGE_URL}`)
        cy.visit(this.PAGE_URL);
        cy.allure().endStep();
        
        return this
    }

    checkPageUrl() {
        cy.allure().startStep(`Check page url - ${this.PAGE_URL}`)
        cy.location('href', {timeout: 60000}).should('include', this.PAGE_URL);
        cy.allure().endStep();

        return this
    }

    checkContainer(){
      cy.allure().startStep(`Check page container`)
      this.container
      .should('exist')
      .should('be.visible');
      cy.allure().endStep();

      return this;
      }
}