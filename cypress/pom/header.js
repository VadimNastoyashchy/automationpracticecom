import { BasePage } from "./base/basePage";

export class PageHeader extends BasePage {
  constructor() {
    super('#header')
  }

  checkHeaderVisible() {
    cy
    .get('body')
    .find(this.CONTAINER)
    .should('be.visible');
  }
}