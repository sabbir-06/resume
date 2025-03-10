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
  get errorMessage() {
    return cy.get('[role="alert"]');
  }
  get emailErrorMessage() {
    return cy.get('.MuiFormHelperText-root.Mui-error')  
  }
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get registrationErrorMessage() {
    return cy.get('[role="alert"]')
  }
  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
  }
}
export default new LoginPage();
