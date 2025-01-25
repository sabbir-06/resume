import { faker } from '@faker-js/faker';
import HomePage from "../../page_object/Home.page";
import registrationPage from "../../page_object/registration.page";
import dashboardPage from '../../page_object/dashboard.page';
import loginPage from '../../page_object/login.page';

const email = faker.internet.email();
const password = faker.string.uuid()
//'sabkar' + Math.floor(Math.random() * 10) + '@gmail.com'

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    HomePage.registerBtn.click();
    registrationPage.firstNameinput.type('sab2')
    registrationPage.lastNameinput.type('kar2')
    registrationPage.emailinput.type(email)
    registrationPage.passwordinput.type(password);
    registrationPage.submitBtn.click();

    //verify role, name, url and title
    dashboardPage.roleLbl.should("have.text", 'role: user');

    dashboardPage.fullNameLbl.should('have.text', 'sab2  kar2')
      
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
      dashboardPage.roleLbl.should("have.text", 'role: user');
      dashboardPage.fullNameLbl.should('have.text', 'sab2  kar2');
    
  
  });
});
