import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type(user.realtor.email);
    loginPage.passwordInput.type(user.realtor.password);
    loginPage.loginButton.click();

    dashboardPage.userRoleLabel.should("have.text", `role: ${user.realtor.role}`);    
    dashboardPage.pageTitle.should("eq", user.realtor.title);    
  });
});
