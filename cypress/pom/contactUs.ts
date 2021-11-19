import { BasePage } from "./base/basePage";

export class ContactUs extends BasePage {
  constructor() {
    super('#contact', 'ContactUs', 'index.php?controller=contact')
  }
}