import loginPage from "../../page_objects/login.page";
import verificaion from "../../fixtures/verification.json";
import user from "../../fixtures/userCredentais.json";

describe("Registration-Negative", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });
  it("Should not register with exisenting email", () => {
    //cy.get('[href="/auth/register"]').click();
    loginPage.firstNameInput.type(user.admin.firstName);
    loginPage.lastNameInput.type(user.admin.lastName);
    loginPage.emailInput.type(verificaion.email);
    loginPage.passwordInput.type(verificaion.Wrongpassword);
    loginPage.loginBtn.click();

    loginPage.registererror.should("be.visible");
  });
});
