import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
describe("Login", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });
  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    loginPage.emailInput.type(user.realtor.email);
    loginPage.passwordInput.type(user.realtor.password);
    loginPage.loginBtn.click();

    dashboardPage.roleLbl.should("have.text", `role: ${user.realtor.role}`);
    
    dashboardPage.ptitle.should("eq", user.realtor.title);
  });
});
