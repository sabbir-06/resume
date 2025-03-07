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
    return cy.get('[role="alert"]');
  }
  get errorMessageEmail() {
    return cy.get('.MuiFormHelperText-root.Mui-error')  
  }
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get registererror() {
    return cy.get('[role="alert"]').contains("Input data validation failed");
  }
}
export default new LoginPage();
