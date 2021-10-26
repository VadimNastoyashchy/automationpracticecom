import { BasePage } from "./base/basePage"

export class SignIn extends BasePage {
  constructor() {
    super('#authentication', 'SignIn', 'index.php?controller=authentication&back=my-account')
  }
}