import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../pages/productPage";
import ViewCartPage from "../../../pages/ViewCartPage";
import PaymentPage from "../../../pages/PaymentPage";

Before({ tags: "@viewcartpage" }, () => {
  cy.logInToApplication();
  ProductPage.visitProductPage();
  cy.addProductToCart();
});


Given("I am on the view cart page", () => {
  ViewCartPage.visitViewCartPage();
});

Then("I verify number of items by clicking view cart in confirmation pop up", () => {
  ProductPage.clickViewCart();
  ViewCartPage.verifyNumberOfProducts();
});

And("confirm the items exist in the cart {string}, {string}, {string}", (productOne, productTwo, productThree) => {
  [productOne, productTwo, productThree].forEach((product) => {
    ViewCartPage.verifyItemsInCart(product);
  })
});

When("I click proceed to checkout", () => {
  ViewCartPage.clickProceedToCheckOutButton();
});

And("make payment after placing the order", () => {
  ViewCartPage.clickPlaceOrderButton();
  PaymentPage.makePayment(); 
});

Then("I see the order placed message", () => {
  ViewCartPage.verifyOrderPlacedMessage();
});

