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
  get errorMessageEmail() {
    return cy.contains("Email must be a valid email address");
  }
  get errorMessage() {
    return cy.contains("Wrong email or password");
  }  
  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
  }
}
export default new LoginPage();
