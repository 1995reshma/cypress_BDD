import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
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

 

