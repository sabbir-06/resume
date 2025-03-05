import { faker, Faker } from "@faker-js/faker";
import HomePage from "../../page_objects/home.page"
import RegistrationPage from "../../page_objects/registration.page";
import DashboardPage from "../../page_objects/dashboard.page";
import LoginPage from "../../page_objects/login.page";
import user from "../../fixtures/userCredentais.json"

const email = faker.internet.email();
const password = faker.string.uuid();
describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    HomePage.registerBtn.click();
    RegistrationPage.firstNameinput.type(user.firstName);
    RegistrationPage.lastNameinput.type(user.lastName);
    RegistrationPage.emailinput.type(email);
    RegistrationPage.passwordinput.type(password);
    RegistrationPage.submitBtn.click();
    
    DashboardPage.roleLbl.should("have.text", "role: user");

    DashboardPage.ptitle.should("eq", user.title);

    DashboardPage.fullNameLbl.should('contain.text', user.fullName);
      
    DashboardPage.userIconBtn.click();
    DashboardPage.logoutBtn.click();
    LoginPage.loginBtn.click();
    LoginPage.login(email, password);
    
    DashboardPage.roleLbl.should("have.text", "role: user");

    DashboardPage.fullNameLbl.should('contain.text', user.fullName);
  });
});
