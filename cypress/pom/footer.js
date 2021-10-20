import { BasePage } from "./base/basePage";

export class PageFooter extends BasePage {
  constructor() {
    super('#footer')
  }

  checkFooterVisible() {
    cy
    .get('body')
    .find(this.CONTAINER)
    .should('be.visible');
  }
}