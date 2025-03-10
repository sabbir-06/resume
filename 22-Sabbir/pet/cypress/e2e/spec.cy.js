import ApplicationFormPage from "../page/ApplicationFormPage";
import {
  loginOnDifferentOrigin,
  applyForJobOnDifferentOrigin,
  uploadResumeOnDifferentOrigin,
  acknowledgeAndFinalStepsOnDifferentOrigin,
} from "../utils/crossOriginUtils"; // Import utility functions
import fixture from "../fixtures/amazon.json";

describe("Registration search and apply jobs", () => {
  const emailAddress = Cypress.env("TEST_EMAIL");
  const testPassword = Cypress.env("TEST_PASSWORD");
  const serverId = Cypress.env("MAILOSAUR_SERVER_ID");
  const randomEmail = `test+${Cypress._.random(
    1000,
    9999
  )}@${serverId}.mailosaur.net`;

  before(() => {
    ApplicationFormPage.visit();
    ApplicationFormPage.emailInput.type(randomEmail);
    ApplicationFormPage.passwordInput.type(testPassword);
    ApplicationFormPage.confirmPasswordInput.type(testPassword);
    ApplicationFormPage.rSubmitButton.click();

    cy.mailosaurGetMessage(serverId, { sentTo: randomEmail }).then((email) => {
      const match = email.html.body.trim().match(/\d{6}/);
      expect(match, "Verification code should be present in the email").to.not
        .be.null;
      const code = match[0];
      cy.log(`Verification Code: ${code}`);
      ApplicationFormPage.verificationCodeInputField.type(code);
      ApplicationFormPage.verificatonCodeSubmitButton.click();
      cy.wait(4000);

      ApplicationFormPage.clickToBackLink.click();
    });
  });

  it("should perform subsequent actions after registration and login", () => {
    cy.wait(4000);
    loginOnDifferentOrigin(emailAddress, testPassword);
    applyForJobOnDifferentOrigin(fixture);
    uploadResumeOnDifferentOrigin();
    acknowledgeAndFinalStepsOnDifferentOrigin();
  });
});



