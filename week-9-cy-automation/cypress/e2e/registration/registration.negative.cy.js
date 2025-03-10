import loginPage from "../../page_objects/login.page";
import verificaion from "../../fixtures/verification.json";
import user from "../../fixtures/userCredentais.json";
describe("Registration-Negative", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should not register with exisenting email", () => {
    cy.get('[href="/auth/register"]').click();
    loginPage.firstNameInput.type(user.firstName);
    loginPage.lastNameInput.type(user.lastName);
    loginPage.emailInput.type(verificaion.email);
    loginPage.passwordInput.type(verificaion.password);
    loginPage.loginBtn.click();

    loginPage.registererror.should("exist");
  });
});
