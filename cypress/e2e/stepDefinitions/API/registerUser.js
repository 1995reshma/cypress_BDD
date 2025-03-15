import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I create a user account through API", () => {
  cy.createUserAccountViaAPI();
});

Then("I verify login is successful through API", () => {
  cy.get("@email").then((email) => {
    cy.get("@password").then((password) => {
      cy.verifyLoginSuccessfulViaAPI(email, password);
    })

  })
 
});
