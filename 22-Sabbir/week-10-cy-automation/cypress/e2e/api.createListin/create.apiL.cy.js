import LoginPage from "../../page_objects/login.page.js";
import HomePage from "../../page_objects/home.page.js";
import DashboardPage from "../../page_objects/dashboard.page.js";
import user from "../../fixtures/userCredentais.json";
import verification from "../../fixtures/Verification.json";
import "../../support/commands.js";
import SearchHomePositive from "../../page_objects/search.home.positive.js";
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
    SearchHomePositive.typePropertyName.type(listingData.title);
    SearchHomePositive.clickToSearch.click();
    SearchHomePositive.desertLandHeading.should("be.visible");
    SearchHomePositive.clickMoreInfo.click();

    SearchHomePositive.askingPrice.should((elem) => {
      const text = elem.text().replace(/\s/g, "").replace(/,/g, "");
      expect(text).to.include("AskingPrice:$600000");
    });     

    SearchHomePositive.lotSizeA.should("include.text", ` Lot Size: ${listingData.lotSize}`);

    SearchHomePositive.garage.should("include.text", ` Garage: ${listingData.garage}`);    
  });
});
