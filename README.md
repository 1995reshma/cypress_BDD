
🚀 Overview
This project is an automated testing framework built with Cypress, Cucumber BDD, and Page Object Model (POM).
It enables behavior-driven development (BDD) for writing test cases in a human-readable format using Gherkin syntax.

📌 Tech Stack
Cypress - JavaScript-based end-to-end testing framework
Cucumber BDD - Defines test cases using Gherkin syntax
Page Object Model (POM) - Enhances maintainability and reusability
Mochawesome - Generates rich HTML test reports

⚙️ **Installation & Setup**
1️⃣ Clone the Repository
git clone https://github.com/your-username/cypress_BDD.git
cd cypress_BDD

2️⃣ **Install Dependencies and configure cypress**
1. Initialize a package.json file:
npm init -y

2. Install Cypress:
npm install cypress --save-dev

3. Install Cucumber Plugin for Cypress
We need the cypress-cucumber-preprocessor package to write tests in Gherkin syntax.
npm install @badeball/cypress-cucumber-preprocessor --save-dev

4. Configure Cypress to Use Cucumber
Update cypress.config.js to include the Cucumber preprocessor.

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)], 
        })
      );
      return config;
    },
  },
});


5. Create a cypress/support/e2e.js File
Modify cypress/support/e2e.js to include:

import "@badeball/cypress-cucumber-preprocessor";

6. Create the BDD Test with filename - LoginPage.feature

   Feature: Login Functionality

  @smoke
  Scenario: User logs in with valid credentials
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I verify the title of the application

7. Create a step definiton file - loginPageSteps.js and add the implementation for below step. Repeat the same for all steps

  Given("I visit the login page", () => {
     cy.visit("https://automationexercise.com/");
  });

8. Step 6: (Optional) Organizing Tests with Page Object Model (POM)
To keep your tests modular and reusable, use the Page Object Model (POM).

cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit("https://automationexercise.com/");
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

3️⃣ Run Cypress Tests

📌 Run Tests in Cypress UI
npx cypress open

📊 Generating Test Reports (Mochawesome)
Run Tests & Generate Reports: Install cypress-mochawesome-reporter plugin to generate reports
npx cypress run 

Reshma
This README provides a detailed guide to setting up, using, and troubleshooting the Cypress + Cucumber BDD + POM framework. 🚀 Let me know if you need any modifications! 
