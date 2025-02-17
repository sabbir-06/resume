import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
import verification from "../../fixtures/Verification.json";
import "../../support/commands";
import searchHomePositive from "../../page_objects/search.home.positive";


describe("Login with admin API token and create API listing with assertions", () => {
  let listingData;

  before(() => {
    // Load the test data from the JSON file
    cy.fixture('listingData.json').then((data) => {
      listingData = data;
    });

    // Log in and get the access token
    cy.request("POST", "/api/users/login", {
      email: "testadmin@gmail.com",
      password: "newpas",
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });

    // Create a new listing using the API
    cy.fixture("img.jpg").then((image) => {
      const blob = Cypress.Blob.base64StringToBlob(image, "image/jpg");

      const formData = new FormData();
      formData.append("images", blob);
      Object.keys(listingData).forEach((key) => {
        formData.append(key, listingData[key]);
      });

      const token = window.localStorage.getItem("accessToken");

      cy.request({
        method: "POST",
        url: "https://dev.delekhomes.com/api/estate-objects",
        body: formData,
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        console.log(response);
      });
    });
  });

  it.only("should search by keyword", () => {
    cy.visit("https://dev.delekhomes.com/");
    searchHomePositive.typePropertyName.type(listingData.title);
    searchHomePositive.clickToSearch.click();

    // Check at least one listing is present
    //cy.visit('https://dev.delekhomes.com/featured-listings')
    //searchHomePositive.checkOneListingPresent();
    //searchHomePositive.searchItemVisible();
    cy.contains("div h5", "Desert Land").should("be.visible");
    
    searchHomePositive.clickMoreInfo.click();
    //searchHomePositive.propertyRealtorVisible();

    // Checking details of the listing
    cy.contains("Asking Price").should("include.text", "Asking Price: $ 600,000");
    // cy.contains("Asking Price").should((elem) => {
    //   const text = elem.text().replace(/\s/g, "").replace(/,/g, "");
    //   expect(text).to.include("AskingPrice:$600000");
    // });
    cy.contains(" Lot Size").should("include.text", ` Lot Size: ${listingData.lotSize}`);
    cy.contains(" Garage").should("include.text", ` Garage: ${listingData.garage}`);
    // Add more assertions as needed
  });

  // Add more tests for other search functionalities here
});




