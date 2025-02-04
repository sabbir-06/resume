import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.string.uuid()
//'sabkar' + Math.floor(Math.random() * 10) + '@gmail.com'

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("sab1");
    cy.get('[name="lastName"]').type("kar3");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

      //verify role, name, url and title
      cy.get("h6").should('have.text', 'sab1  kar3')
      cy.get("a p").should("have.text", 'role: user');
    //cy.get("a p").should("be.visible").and("have.text", "role: user");

    
    
    //cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    //logout
      cy.get('button [data-testid="PersonIcon"]').click();
      cy.contains('Logout').click();
  
      //login
       //cy.get('[href="/auth/login"]').click()
       cy.get('[name="email"]').type(email)
       cy.get('[type="password"]').type(password)
       cy.get('[type="submit"]').click()

       //verify role and title
       cy.get("h6").should('have.text', 'sab1  kar3')
       cy.get("a p").should("have.text", 'role: user');
       
  
  });
});
