Cypress BDD Automation Framework
🚀 Overview
This project is an automated testing framework built with Cypress, Cucumber BDD, and Page Object Model (POM).
It enables behavior-driven development (BDD) for writing test cases in a human-readable format using Gherkin syntax.

📌 Tech Stack
Cypress - JavaScript-based end-to-end testing framework
Cucumber BDD - Defines test cases using Gherkin syntax
Page Object Model (POM) - Enhances maintainability and reusability
Mochawesome - Generates rich HTML test reports

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/cypress_BDD.git
cd cypress_BDD
2️⃣ Install Dependencies

npm install
3️⃣ Run Cypress Tests
📌 Run All Tests (Headless Mode)
npm run test
📌 Run Tests in Cypress UI
npx cypress open
📌 Run Tests with Specific Tags
npx cypress run --env TAGS="@smoke"
📝 Writing Tests in BDD (Cucumber)
Example Feature File (login.feature)

Feature: Login Functionality

  Scenario: Valid user login
    Given I navigate to the login page
    When I enter valid credentials
    Then I should see the homepage
Step Definition (loginSteps.js)

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("I navigate to the login page", () => {
  cy.visit("/login");
});

When("I enter valid credentials", () => {
  loginPage.enterUsername("testuser");
  loginPage.enterPassword("password123");
  loginPage.clickLogin();
});

Then("I should see the homepage", () => {
  cy.url().should("include", "/dashboard");
});
📊 Generating Test Reports (Mochawesome)
Run Tests & Generate Reports:

npx cypress run --reporter mochawesome
View Reports:

🙌 Contributors
Reshma
This README provides a detailed guide to setting up, using, and troubleshooting the Cypress + Cucumber BDD + POM framework. 🚀 Let me know if you need any modifications! 
