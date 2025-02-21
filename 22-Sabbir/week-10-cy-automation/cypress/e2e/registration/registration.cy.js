import { faker, Faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import verification from "../../fixtures/Verification.json";
import user from "../../fixtures/userCredentais.json";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameinput.type(user.firstName);
    registrationPage.lastNameinput.type(user.lastName);
    registrationPage.emailinput.type(email);
    registrationPage.passwordinput.type(password);
    registrationPage.submitBtn.click();

    dashboardPage.roleLbl.should("have.text", "role: user");

    dashboardPage.ptitle.should("eq", verification.title);

    dashboardPage.fullNameLbl.should("have.text", user.rfullName);

    
    dashboardPage.userIconBtn.click();

    dashboardPage.logoutBtn.click();
    loginPage.loginBtn.click();
    loginPage.login(email, password);

    dashboardPage.roleLbl.should("have.text", `role: ${user.role2}`);

    dashboardPage.fullNameLbl.should("have.text", user.rfullName);
  });
});
