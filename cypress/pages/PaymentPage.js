class PaymentPage {
  PaymentPageElement = {
    nameOnCard : "[data-qa='name-on-card']",
    cardNumber : "[data-qa='card-number']",
    cvc : "[data-qa='cvc']",
    expiryMonth : "[data-qa='expiry-month']",
    expiryYear : "[data-qa='expiry-year']",
    submitBtn : "#submit"
  }
  
  makePayment(){
    cy.fixture("payments").then((userCardDetails) => {
      const paymentDetail = userCardDetails.paymentdetailsuser
      cy.contains("Payment").should("be.visible");
      cy.get(this.PaymentPageElement["nameOnCard"]).type(paymentDetail.nameoncard);
      cy.get(this.PaymentPageElement["cardNumber"]).type(paymentDetail.cardnumber);
      cy.get(this.PaymentPageElement["cvc"]).type(paymentDetail.cvc);
      cy.get(this.PaymentPageElement["expiryMonth"]).type(paymentDetail.expirationmonth);
      cy.get(this.PaymentPageElement["expiryYear"]).type(paymentDetail.expirationyear);
      cy.get(this.PaymentPageElement["submitBtn"]).click();
  });
  }
  
}
export default new PaymentPage();