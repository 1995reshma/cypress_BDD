class PaymentPage {
  PaymentPageElement = {
    nameOnCard : "[data-qa='name-on-card']",
    cardNumber : "[data-qa='card-number']",
    cvc : "[data-qa='cvc']",
    expiryMonth : "[data-qa='expiry-month']",
    expiryYear : "[data-qa='expiry-year']",
    submitBtn : "#submit"
  } 
}
export default new PaymentPage();