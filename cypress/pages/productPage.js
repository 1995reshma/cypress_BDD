class ProductPage {
  productPageElement = {
    searchProduct : "#search_product",
    submitSearchBtn : "#submit_search",
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
}

export default new ProductPage();