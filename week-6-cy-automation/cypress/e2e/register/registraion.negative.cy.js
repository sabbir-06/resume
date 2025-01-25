
describe("Negative Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with exisenting email", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("sab1");
    cy.get('[name="lastName"]').type("kar3");
    cy.get('[name="email"]').type('ska464@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.get('[type="submit"]').click();

    //verify registraion fail

    cy.contains('Input data validation failed').should('exist');


        
  
  });
});
