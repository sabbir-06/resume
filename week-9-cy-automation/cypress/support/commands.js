// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add(
//   "login",
//   (email = "ska4564@gmail.com", password = "newpas") => {
//     cy.request("POST", "/api/users/login", {
//       email: email,
//       password: password,
//     }).then((response) => {
//       // response.body is automatically serialized into JSON
//       //expect(response.body).to.have.property('name', 'Jane') // true
//       window.localStorage.setItem("accessToken", response.body.accesstoken);
//     });
//   }
// );
Cypress.Commands.add("login", () => {
  cy.fixture("userCredentais").then((data) => {
    cy.request("POST", "/api/users/login", {
      email: data.email,
      password: data.password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  });
});

// Handle uncaught exceptions
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
