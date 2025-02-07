import { faker, Faker } from "@faker-js/faker";
import homePage from "../../../page_objects/home.page";
import registrationPage from "../../../page_objects/registration.page";
import dashboardPage from "../../../page_objects/dashboard.page";
import loginPage from "../../../page_objects/login.page";
import verification from '../../fixtures/Verification.json'

const email = faker.internet.email();
const password = faker.string.uuid();
//'sabkar' + Math.floor(Math.random() * 10) + '@gmail.com'

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameinput.type("sab2");
    registrationPage.lastNameinput.type("kar2");
    registrationPage.emailinput.type(email);
    registrationPage.passwordinput.type(password);
    registrationPage.submitBtn.click();

    //verify role, name, url and title
    dashboardPage.roleLbl.should("have.text", "role: user");

    dashboardPage.ptitle.should("eq", verification.title); //from fixture

    dashboardPage.fullNameLbl.should("have.text", verification.fullName);
    

    // cy.get("a p").should("have.text", 'role: user');
    //cy.get("a p").should("be.visible").and("have.text", "role: user");

    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    //logout
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();

    // //login
    loginPage.loginBtn.click();
    loginPage.login(email, password);
    //loginPage.loginBtn.click();

    //verify
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.fullNameLbl.should("have.text", "sab2  kar2");
  });
});
