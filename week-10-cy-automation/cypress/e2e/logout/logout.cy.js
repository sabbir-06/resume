import loginPage from "../../page_objects/login.page";

import homePage from "../../page_objects/home.page";

import dashboardPage from "../../page_objects/dashboard.page";
import logoutPage from "../../page_objects/logout.page";


import verification from '../../fixtures/Verification.json'

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account as an admin (you can use your own user with any role", () => {
    homePage.loginBtn.click();

    loginPage.emailInput.type("ska4564@gmail.com");

    loginPage.passwordInput.type("newpas");

    loginPage.loginBtn.click();

    
    dashboardPage.roleLbl.should("have.text", `role: ${verification.role}`);
    dashboardPage.ptitle.should("eq", verification.title);

    //logout
    logoutPage.ploginBtn.click();
    logoutPage.logoutBtn.click();
    //verify logout
    logoutPage.varifylogout;
  });
});
