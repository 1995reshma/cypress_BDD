class LoginPage {
  loginPageElement = {
    email : "[data-qa='login-email']",
    password : "[data-qa='login-password']",
    loginBtn : "[data-qa='login-button']"
  }

  visitLoginPage(){
    cy.visit("/login");
  }

  enterUserName(userNameData) {
    cy.get(this.loginPageElement.email).type(userNameData);
  }

  enterPassword(passwordData) {
    cy.get(this.loginPageElement.password).type(passwordData);
  }

  clickLoginButton() {
    cy.get(this.loginPageElement.loginBtn).click();
  }

  displayErrorMessage() {
    cy.contains("Your email or password is incorrect!")
      .should('be.visible')
  }
  
  verifyTitle() {
    cy.title().should('eq', 'Automation Exercise');
  }
}
export default new LoginPage();