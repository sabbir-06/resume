import { faker, Faker } from "@faker-js/faker";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import userData from "../../fixtures/userCredentais.json";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    loginPage.registerBtn.click();
    registrationPage.firstNameInput.type(userData.user.firstName);
    registrationPage.lastNameInput.type(userData.user.lastName);
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.submitBtn.click();

    dashboardPage.userRoleLabel.should("have.text", "role: user");
    dashboardPage.pageTitle.should("eq", userData.user.title);
    dashboardPage.fullNameHeader.should("have.text", userData.user.fullName);    
    dashboardPage.userIconButton.click();
    dashboardPage.logoutBtn.click();    
    loginPage.login(email, password);
    
    dashboardPage.userRoleLabel.should("have.text", `role: ${userData.user.role}`);
    dashboardPage.fullNameHeader.should("have.text", userData.user.fullName);
  });
});
