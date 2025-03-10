import verification from "../../fixtures/verification.json";
import userCredential from "../../fixtures/userCredentais.json";
import loginPage from "../../page_objects/login.page";

describe("Negative signin", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not login with an incorrect password", () => {
    cy.visit("/dashboard/user/profile");
    loginPage.emailInput.type(userCredential.realtor.email);
    loginPage.passwordInput.type(verification.Wrongpassword);
    loginPage.loginBtn.click();

    loginPage.errorMessage
      .should("be.visible")
      .and("contain", "Wrong email or password");
  });

  it("Should not login with an incorrect email", () => {
    cy.visit("/dashboard/user/profile");
    loginPage.emailInput.type(verification.Wrongmail);
    loginPage.passwordInput.type(userCredential.realtor.password);
    loginPage.loginBtn.click();

    loginPage.emailErrorMessage
      .should("be.visible")
      .and("contain", "Email must be a valid email address");
  });
});
