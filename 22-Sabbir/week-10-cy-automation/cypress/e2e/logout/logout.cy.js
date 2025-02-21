import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import logoutPage from "../../page_objects/logout.page";
import verification from "../../fixtures/Verification.json";
import user from "../../fixtures/userCredentais.json";

describe("Login", () => {
  beforeEach(() => {});

  it("Should log-in & Logout", () => {
    cy.login();
    cy.visit(user.url);

    dashboardPage.roleLbl.should("have.text", `role: ${verification.role}`);

    dashboardPage.ptitle.should("eq", verification.title);
    logoutPage.ploginBtn.click();
    logoutPage.logoutBtn.click();

    logoutPage.varifylogout.should("have.text", "Sign in to Delek Homes");
  });
});
