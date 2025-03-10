class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[type="password"]');
  }
  get errorMessageEmail() {
    return cy.contains("Email must be a valid email address");
  }
  get loginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get registerBtn() {
    return cy.get('[href="/auth/register"]');
  }
 get loginButton() {
    return cy.get('[type="submit"]').should("be.visible").should("be.enabled");
  }  
  get errorMessage() {
    return cy.contains("Wrong email or password"); 
  }  
  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}
export default new LoginPage();
