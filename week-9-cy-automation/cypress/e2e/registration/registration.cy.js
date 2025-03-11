import { faker, Faker } from "@faker-js/faker";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import user from "../../fixtures/userCredentais.json"

const email = faker.internet.email();
const password = faker.string.uuid();
describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("Should register a new account", () => {
   // homePage.registerBtn.click();
    registrationPage.firstNameinput.type(user.user.firstName);
    registrationPage.lastNameinput.type(user.user.lastName);
    registrationPage.emailinput.type(email);
    registrationPage.passwordinput.type(password);
    registrationPage.submitBtn.click();
    
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.ptitle.should("eq", user.user.title);
    dashboardPage.fullNameLbl.should('contain.text', user.user.fullName);      
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();
    loginPage.loginBtn.click();
    loginPage.login(email, password);
    
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.fullNameLbl.should('contain.text', user.user.fullName);
  });
});
