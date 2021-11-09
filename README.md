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

1. On command line run: 
npm i -D @shelex/cypress-allure-plugin

2. Connect plugin in cypress/plugins/index.js
Add the next code to those file:
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

3. Register commands in cypress/support/index.js file:
import '@shelex/cypress-allure-plugin';

4. Configurate cypress.json
{
    "env": {
        "allureResultsPath": "someFolder/results",
        // tms prefix used without `*`, equivalent to `https://url-to-bug-tracking-system/task-*`
        "tmsPrefix": "https://url-to-bug-tracking-system/task-",
        "issuePrefix": "https://url-to-tms/tests/caseId-"
        // usage:  cy.allure().issue('blockerIssue', 'AST-111')
        // result: https://url-to-bug-tracking-system/task-AST-111
    }
}

5.Run Allure report
npx cypress run --env allure=true