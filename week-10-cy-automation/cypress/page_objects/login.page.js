class LoginPage {
    get emailInput() {
      return cy.get('[name="email"]');
    }
    get passwordInput() {
      return cy.get('[type="password"]');
    }
    get loginBtn() {
      return cy.get('[type="submit"]');
    }
  
  login (email, password){
   // HomePage.loginBtn.click();
  
   this.emailInput.type(email);
  
   this.passwordInput.type(password);
  
   this.loginBtn.click();
  }
  
  
  }
  
  export default new LoginPage();
  
  
  