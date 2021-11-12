# automationpractice.com

### The cypress end-to-end tests for the automationpractice.com.

### Getting started

> Before you follow the steps below, make sure you have the
[Node.js](https://nodejs.org/en/download/) installed _globally_ only your system

1. Install Cypress :

```
npm install cypress --save-dev

...

Add Allure report to project

1. Install allure and allure plugin: 
brew install allure
npm i -D @shelex/cypress-allure-plugin

2. Connect plugin in cypress/plugins/index.js
Add the next code to those file:

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

3. Register commands in cypress/support/index.js file:
import '@shelex/cypress-allure-plugin';

4. Configurate cypress.json
{
    "env": {
        "allureResultsPath": "./allure-results",
        "tmsPrefix": "https://automationpracticecom.atlassian.net/browse/",

    }
}

5.Create Allure test folder
npx cypress run --env allure=true

6.Generate Allure report folder
allure generate allure-results --clean -o allure-report

7.Open report on browser
allure open



