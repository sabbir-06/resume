import loginPage from "../../page_object/login.page";
import HomePage from "../../page_object/Home.page";
import dashboardPage from "../../page_object/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    HomePage.loginBtn.click();

    loginPage.emailInput.type("ska4564@gmail.com");

    loginPage.passwordInput.type("newpas");

    loginPage.loginBtn.click();

    dashboardPage.roleLbl.should('have.text', 'role: user');
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});
