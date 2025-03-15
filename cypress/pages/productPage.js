class ProductPage {
  productPageElement = {
    searchProduct : "#search_product",
    submitSearchBtn : "#submit_search",
    name : "#name",
    email : "#email",
    review : "textarea#review",
    submitBtn : "#button-review"
  }

  visitProductPage(){
    cy.visit("/products");
  }
  
  verifyTitle() {
    cy.title().should('eq', 'Automation Exercise - All Products');
  }

  searchProduct(product){
    cy.get(this.productPageElement.searchProduct).clear();
    cy.get(this.productPageElement.searchProduct).type(product);
    cy.get(this.productPageElement.submitSearchBtn).click();
  }

  clickContinueShoppingButton(){
    cy.contains("Continue Shopping").click();
  }

  clickAddToCart(){
    cy.contains("Add to cart").click();
  }

  clickViewCart(){
    cy.contains("Cart").click();
  }

  clickViewProduct(){
    cy.contains("View Product").click();
  }

  enterUserName(userName){
    cy.get(this.productPageElement.name).type(userName);
  }

  enterUserEmail(userEmail){
    cy.get(this.productPageElement.email).type(userEmail);
  }

  enterUserReview(reviewComment){
    cy.get(this.productPageElement.review).type(reviewComment);
  }

  clickSubmitButton(){
    cy.get("#button-review").click();
  }

  verifySuccessMessage(){
    cy.contains("Thank you for your review.").should("be.visible");
  }
}

export default new ProductPage();