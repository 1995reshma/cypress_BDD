import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../pages/productPage";

Before({ tags: "@productpage"}, () => {
  cy.logInToApplication();
});

Given("I am on the product page", () => {
  ProductPage.visitProductPage();
  ProductPage.verifyTitle();
});

When("I search for products {string}, {string}, {string} and add them to the cart", (productOne, productTwo, productThree) => {
  [productOne, productTwo, productThree].forEach((product) => {
    ProductPage.searchProduct(product);
    ProductPage.clickAddToCart();
    ProductPage.clickContinueShoppingButton();
  });
});

When("I search product {string}", (product) => {
  ProductPage.searchProduct(product);
});

And("click on view product", () => {
  ProductPage.clickViewProduct();
});

Then("I submit my review", () => {
  cy.fixture("userData").then((userDetails) => {
    ProductPage.enterUserName(userDetails.name);
    ProductPage.enterUserEmail(userDetails.email);
    ProductPage.enterUserReview("This is a good product");
    ProductPage.clickSubmitButton();
    })
});

And("I verify my review has been submitted successfully", () => {
  ProductPage.verifySuccessMessage();
});
 

