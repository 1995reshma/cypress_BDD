class ViewCartPage {
  viewCartPageElement = {
    productList : "tbody tr",
    orderPlacedMessage : "[data-qa='order-placeded']"
  }

  visitViewCartPage(){
    cy.visit("/view_cart");
  }
  
  verifyTitle() {
    cy.title().should('eq', 'Automation Exercise - Checkout');
  }

  verifyNumberOfProducts(){
    cy.get(this.viewCartPageElement.productList).should("have.length", 3);
  }

  verifyItemsInCart(product){
    cy.contains(product).should("be.visible");
  }

  clickProceedToCheckOutButton(){
    cy.contains("Proceed To Checkout").click();
  }
  clickPlaceOrderButton(){
    cy.contains("Place Order").click();
  }

  verifyOrderPlacedMessage(){
    cy.get(this.viewCartPageElement.orderPlacedMessage).should("be.visible");
  }
}

export default new ViewCartPage();