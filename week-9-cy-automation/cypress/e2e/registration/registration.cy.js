import { faker, Faker } from "@faker-js/faker";
import homePage from "../../../page_objects/home.page";
import registrationPage from "../../../page_objects/registration.page";
import dashboardPage from "../../../page_objects/dashboard.page";
import loginPage from "../../../page_objects/login.page";
import verification from "../../fixtures/Verification.json";
import user from "../../fixtures/userCredentais.json";

const email = faker.internet.email();
const password = faker.string.uuid(); // other way to do this'sabkar' + Math.floor(Math.random() * 10) + '@gmail.com'

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameinput.type(user.firstName);
    registrationPage.lastNameinput.type(user.lastName);
    registrationPage.emailinput.type(user.email);
    registrationPage.passwordinput.type(user.password);
    registrationPage.submitBtn.click();
    //verify role, name, url and title
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.ptitle.should("eq", verification.title); //from fixture
    dashboardPage.fullNameLbl.should("have.text", verification.fullName);
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");
    //logout
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();
    // //login
    loginPage.loginBtn.click();
    loginPage.login(email, password);
    //verify
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.fullNameLbl.should("have.text", "sab2  kar2");
  });
});
