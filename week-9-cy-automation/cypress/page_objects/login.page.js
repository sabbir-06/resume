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
  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
  }
  get errorMessage() {
    return cy.contains("Wrong email or password");
  }
  get errorMessageEmail() {
    return cy.contains("Email must be a valid email address");
  }
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get registererror() {
    return cy.contains("Input data validation failed");
  }
}
export default new LoginPage();
