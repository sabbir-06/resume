import loginPage from "../../../page_objects/login.page";

import homePage from "../../../page_objects/home.page";

import dashboardPage from "../../../page_objects/dashboard.page";

import user from '../../fixtures/userCredentais.json'

import verification from '../../fixtures/Verification.json'

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    homePage.loginBtn.click();

    loginPage.emailInput.type(user.email);//from fixtures

    loginPage.passwordInput.type(user.password);

    loginPage.loginBtn.click();

    dashboardPage.roleLbl.should("have.text", `role: ${verification.role}`); //fixture verification
    cy.title().should("eq", verification.title);
  });
});
