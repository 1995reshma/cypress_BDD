import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/LoginPage";

Given("I visit the login page", () => {
  LoginPage.visitLoginPage();
});

When("I enter valid credentials", () => {
  cy.fixture("credentials").then((credential) => {
    LoginPage.enterUserName(credential['valid_credential']['username']);
    LoginPage.enterPassword(credential['valid_credential']['password']);
  });
});

When("I enter invalid credentials", () => {
  cy.fixture("credentials").then((credential) => {
    LoginPage.enterUserName(credential['invalid_credential']['username']);
    LoginPage.enterPassword(credential['invalid_credential']['password']);
  });
});

Then("the error message is displayed", () => {
  LoginPage.displayErrorMessage();
});

And("I click the login button", () => {
  LoginPage.clickLoginButton();
});

Then("I verify the title of the application", () => {
  LoginPage.verifyTitle();
});

