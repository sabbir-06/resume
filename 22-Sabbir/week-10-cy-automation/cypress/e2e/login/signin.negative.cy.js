import verification from "../../fixtures/Verification.json";
import verificationText from "../../fixtures/verificationText.json";
import loginPage from "../../page_objects/login.page";
import userData from "../../fixtures/userCredentais.json";

describe("Negative signin", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Negative signin - incorrect password", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type(userData.realtor.email);
    loginPage.passwordInput.type(verification.wrongpassword);
    loginPage.loginButton.click();

    loginPage.errorMessage
      .should("be.visible")
      
      .and("contain", verificationText.wrongErrorEmailMesg);
  });
  it("Negative signin - incorrect email", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type(verification.wrongmail);
    loginPage.passwordInput.type(userData.realtor.password);
    loginPage.loginButton.click();

    loginPage.errorMessageEmail
      .should("be.visible")
      .and("contain", verificationText.errorMessage);
  }); 
});