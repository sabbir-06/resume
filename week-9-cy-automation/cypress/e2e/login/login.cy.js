import LoginPage from "../../page_objects/login.page";
import HomePage from "../../page_objects/home.page";
import DashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    HomePage.loginBtn.click();
    LoginPage.emailInput.type(user.email);
    LoginPage.passwordInput.type(user.password);
    LoginPage.loginBtn.click();

    DashboardPage.roleLbl.should("have.text", `role: ${user.role}`);
    
    DashboardPage.ptitle.should("eq", user.title);    
  });
});
