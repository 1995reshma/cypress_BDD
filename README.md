# 🚀 Overview
This project is an automated testing framework built with Cypress, Cucumber BDD, and Page Object Model (POM). It enables behavior-driven development (BDD) for writing test cases in a human-readable format using Gherkin syntax.

## 📌 Tech Stack
- **Cypress** - JavaScript-based end-to-end testing framework
- **Cucumber BDD** - Defines test cases using Gherkin syntax
- **Page Object Model (POM)** - Enhances maintainability and reusability
- **Mochawesome** - Generates rich HTML test reports

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository and create a branch
```sh
git clone https://github.com/your-username/cypress_BDD.git
git checkout -b "loginfeature"
cd cypress_BDD
```

### 2️⃣ Install Dependencies and Configure Cypress

#### **Step 1: Initialize a package.json file**
```sh
npm init -y
```

#### **Step 2: Install Cypress**
```sh
npm install cypress --save-dev
```

#### **Step 3: Install Cucumber Plugin for Cypress**
We need the `cypress-cucumber-preprocessor` package to write tests in Gherkin syntax.
```sh
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

#### **Step 4: Configure Cypress to Use Cucumber**
Update `cypress.config.js` to include the Cucumber preprocessor.

```javascript
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
```

#### **Step 5: Create a `cypress/support/e2e.js` File**
Modify `cypress/support/e2e.js` to include:

```javascript
import "@badeball/cypress-cucumber-preprocessor";
```

#### **Step 6: Create the BDD Test (`LoginPage.feature`)**
Create a feature file with the following content:

```
Feature: Login Functionality

  @smoke
  Scenario: User logs in with valid credentials
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I verify the title of the application
```

#### **Step 7: Create a Step Definition File (`loginPageSteps.js`)**
Implement the following step definition (repeat for other steps as needed):

```javascript
Given("I visit the login page", () => {
   cy.visit("https://automationexercise.com/");
});
```

#### **Step 8: (Optional) Organizing Tests with Page Object Model (POM)**
To keep your tests modular and reusable, use the Page Object Model (POM).

Create `cypress/pages/LoginPage.js` and define methods:

```javascript
class LoginPage {
  visit() {
    cy.visit("https://automationexercise.com/");
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }
}

export default LoginPage;
```

---

## 3️⃣ Run Cypress Tests

### 📌 Run Tests in Cypress UI
```sh
npx cypress open
```

### 📊 Generating Test Reports (Mochawesome)
Run tests & generate reports using the `cypress-mochawesome-reporter` plugin:
```sh
npx cypress run
```

---

This README provides a detailed guide to setting up, using, and troubleshooting the Cypress + Cucumber BDD + POM framework. 🚀 Let me know if you need any modifications!

