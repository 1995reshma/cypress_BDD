import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/productPage";

Cypress.Commands.add('logInToApplication', () => { 
  cy.fixture("credentials").then((credential) => {
      LoginPage.visitLoginPage();
      LoginPage.enterUserName(credential['valid_credential']['username']);
      LoginPage.enterPassword(credential['valid_credential']['password']);
      LoginPage.clickLoginButton();
  });
})

Cypress.Commands.add('addProductToCart', () => { 
  cy.fixture("products").then((data) => {
    const productListArray = data.productList
    productListArray.forEach((product)=>{
      ProductPage.searchProduct(product);
      ProductPage.clickAddToCart();
      ProductPage.clickContinueShoppingButton();
    })
});
})

Cypress.Commands.add('createUserAccountViaAPI', () => { 
  cy.fixture('userData').then((userData) => {
    const email = `johndoe${Date.now()}@test.com`;
    cy.wrap(email).as("email");
    cy.wrap(userData.password).as("password");
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        ...userData,
        email: email
      },
      form: true
    }).then((response) => {
      const res = JSON.parse(response.body);
      cy.log("Response is: " + JSON.stringify(res));
      expect(response.status).to.eq(200);
      expect(res).to.have.property('message', 'User created!');
    });
  });
})

Cypress.Commands.add('verifyLoginSuccessfulViaAPI', (email, password) => { 
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/verifyLogin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: {
      email: email,  
      password: password 
    },
    form: true
  }).then((response) => {
    res = JSON.parse(response.body)
    expect(response.status).to.eq(200);
    expect(res).to.have.property('message', 'User exists!');
  });
})