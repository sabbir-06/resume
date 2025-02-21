import verification from "../../fixtures/Verification.json";
import loginPage from "../../page_objects/login.page";
describe("Negative signin", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should not login with wrong password", () => {
    cy.visit(verification.url);
    loginPage.emailInput.type(verification.email);
    loginPage.passwordInput.type(verification.Wrongpassword);
    loginPage.loginBtn.click();
    loginPage.errorMessage.then(($errorMessage) => {
      if ($errorMessage.is(":visible")) {
        cy.visit(verification.url);
        loginPage.emailInput.type(verification.Wrongmail); 
        loginPage.passwordInput.type(verification.password); 
        loginPage.loginBtn.click();
      } else {
        cy.log("invalid password-test passed");
      }
      loginPage.errorMessageEmail.then(($errorMessage2) => {
        if ($errorMessage2.is(":visible")) {
          cy.log("The email address is invalid, test passed");
        } else {
        }
      });
    });
  });
});