class registraionPage {
  get firstNameinput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameinput() {
    return cy.get('[name="lastName"]');
  }
  get emailinput() {
    return cy.get('[name="email"]');
  }
  get passwordinput() {
    return cy.get('[name="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }
}
export default new registraionPage();