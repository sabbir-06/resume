import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
import verification from "../../fixtures/Verification.json";
import "../../support/commands.js";
import searchHomePositive from "../../page_objects/search.home.positive";
import apiListingService from "../../support/apiListingService.js";

describe("Login with admin API token and create API listing with assertions", () => {
  let listingData;
  beforeEach(() => {
    cy.loadListingData().then((data) => {
      listingData = data;
    });
    cy.loginAndGetToken();
  });

  it("should create a new listing using the API", () => {
    cy.fixture("img.jpg").then((image) => {
      const token = window.localStorage.getItem("accessToken");
      cy.log(`Token before request: ${token}`);
      apiListingService
        .createListing(listingData, image, token)
        .then((response) => {
          console.log(response);
        });
    });
  });

  it("should search by keyword", () => {
    cy.visit("/");
    searchHomePositive.typePropertyName.type(listingData.title);
    searchHomePositive.clickToSearch.click();
    searchHomePositive.desertLandHeading.should("be.visible");
    searchHomePositive.clickMoreInfo.click();

    searchHomePositive.askingPrice.should((elem) => {
      const text = elem.text().replace(/\s/g, "").replace(/,/g, "");
      expect(text).to.include("AskingPrice:$600000");
    });     

    searchHomePositive.lotSizeA.should("include.text", ` Lot Size: ${listingData.lotSize}`);

    searchHomePositive.garage.should("include.text", ` Garage: ${listingData.garage}`);    
  });
});
