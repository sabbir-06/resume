import "cypress-file-upload";
Cypress.Commands.add("rlogin", () => {
  cy.fixture("userCredentais.json").then((data) => {
    cy.request("POST", "/api/users/login", {
      email: data.realtor.email,
      password: data.realtor.password
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
Cypress.Commands.add(
  "createListing",
  (listingData, imageBase64, token) => {
    const blob = Cypress.Blob.base64StringToBlob(imageBase64, "image/jpg");
    const formData = new FormData();

    formData.append("images", blob);
    Object.entries(listingData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return cy.request({
      method: "POST",
      url: "https://dev.delekhomes.com/api/estate-objects",
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
  }
);