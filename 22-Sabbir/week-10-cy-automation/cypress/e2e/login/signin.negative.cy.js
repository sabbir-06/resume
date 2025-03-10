import verification from "../../fixtures/Verification.json";
import loginPage from "../../page_objects/login.page";
import user from "../../fixtures/userCredentais.json";

describe("Negative signin", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Should not login with an incorrect password", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type(verification.email);
    loginPage.passwordInput.type(verification.wrongpassword);
    loginPage.loginButton.click();

    loginPage.errorMessage
      .should("be.visible")
      .and("contain", "Wrong email or password");
  });
  it("Should not login with an incorrect email", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type(verification.wrongmail);
    loginPage.passwordInput.type(user.realtor.password);
    loginPage.loginButton.click();

    loginPage.errorMessageEmail
      .should("be.visible")
      .and("contain", "Email must be a valid email address");
  });
});
