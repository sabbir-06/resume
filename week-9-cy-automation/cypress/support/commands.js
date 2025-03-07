Cypress.Commands.add("login", () => {
  cy.fixture("userCredentais").then((data) => {
    cy.request("POST", "/api/users/login", {
      email: data.realtor.email,
      password: data.realtor.password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
