import dashboardPage from "../../page_objects/dashboard.page";
import logoutPage from "../../page_objects/logout.page";
import userData from "../../fixtures/userCredentais.json";
import verificationText from "../../fixtures/verificatonText.json"

describe("Login", () => {
  beforeEach(() => {});

  it("Should log-in & Logout", () => {
    cy.login();
    cy.visit("/dashboard/user/profile");
    dashboardPage.userRoleLabel.should(
      "have.text",
      `role: ${userData.realtor.role}`
    );
    dashboardPage.pageTitle.should("eq", userData.realtor.title);
    logoutPage.ploginBtn.click();
    logoutPage.logoutBtn.click();

    logoutPage.varifylogout.should("have.text", verificationText.signInText);
  });
});