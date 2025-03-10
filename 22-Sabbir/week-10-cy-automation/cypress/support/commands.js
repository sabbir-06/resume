import "cypress-file-upload";
import user from '../fixtures/userCredentais.json';

Cypress.Commands.add(
  "login",
  (email = user.realtor.email, password = user.realtor.password) => {
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  }
); 

Cypress.Commands.add("rlogin", () => {
  cy.fixture("userCredentais.json").then((data) => {
    cy.request("POST", "/api/users/login", {
      email: data.email2,
      password: data.password2,
    }).then((response) => {
      cy.log("Login response body:", response.body);
      window.localStorage.setItem("accessToken", response.body.accessToken);
      cy.log(
        "Stored access token:",
        window.localStorage.getItem("accessToken")
      );
    });
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("loadListingData", () => {
  return cy.fixture("listingData.json");
});

Cypress.Commands.add("loginAndGetToken", () => {
  cy.rlogin().then(() => {
    const token = window.localStorage.getItem("accessToken");
    cy.log(`Token after login: ${token}`);
    return cy.wrap(token);
  });
});



// Cypress.Commands.add("login12", () => {
//   cy.fixture("userCredentais").then((data) => {
//     cy.request("POST", "/api/users/login", {
//       email: data.email,
//       password: data.password,
//     }).then((response) => {
//       cy.log("Login response body: ", JSON.stringify(response.body));
//       // Adjust the property name based on the actual response structure:
//       const token = response.body.accesstoken || response.body.token || (response.body.data && response.body.data.token);
//       cy.log(`Extracted token: ${token}`);
//       window.localStorage.setItem("accessToken", token);
//     });
//   });
// });

