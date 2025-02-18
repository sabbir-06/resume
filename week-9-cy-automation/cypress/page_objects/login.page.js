class loginPage {
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
   this.emailInput.type(email);
   this.passwordInput.type(password);
   this.loginBtn.click();
  }
  };   
  export default new loginPage();