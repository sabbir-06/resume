import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import logoutPage from "../../page_objects/logout.page";
import verification from "../../fixtures/verification.json";
import user from "../../fixtures/userCredentais.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type(user.email);
    loginPage.passwordInput.type(user.password);
    loginPage.loginBtn.click();
    dashboardPage.roleLbl.should("have.text", `role: ${verification.role}`);
    dashboardPage.ptitle.should("eq", verification.title);
    logoutPage.ploginBtn.click();
    logoutPage.logoutBtn.click();
    //verify logout
    logoutPage.varifylogout;
  });
});
