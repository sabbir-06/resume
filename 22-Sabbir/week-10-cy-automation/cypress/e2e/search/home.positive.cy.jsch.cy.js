import homePagee from "../../page_objects/home.pagee";
import listingData from "../../fixtures/listingData.json";
import apiListingService from "../../support/apiListingService";

describe("create through api and search", () => {
  before(() => {
      let listingData;
      cy.loadListingData().then((data) => {
      listingData = data;
      });
      cy.loginAndGetToken();   
    cy.rlogin();    
  });

   it("create a new listing using the API", () => {
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
    homePagee.screenThemeCheckbox.click();
    homePagee.propertyNameInput.type(listingData.secondtitile);
    homePagee.submitButton.click();

    homePagee.propertyListings.should("have.length.greaterThan", 0);
    homePagee.searchResultHeader.should("be.visible");
   });
  it("Should search by bedrooms", () => {
    cy.visit("/");
    homePagee.screenThemeCheckbox.click();
    homePagee.bedroomDropdown.click();
    homePagee.bedroomOptionTwo.click();
    homePagee.submitButton.click();

    homePagee.propertyListings.should("have.length.greaterThan", 0);
    homePagee.moreInfoButton.click();
    homePagee.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(3);
    });
    });
  it("Should search by city", () => {
    cy.visit("/");
    homePagee.screenThemeCheckbox.click();
    homePagee.cityInput.type(listingData.city);    
    homePagee.submitButton.click();

    homePagee.cityLabel.should("contain.text", " City:");
    homePagee.moreInfoButton.click();
    homePagee.garageNumber.should("include.text", " Garage: ");
    homePagee.bathroomNumber.should("include.text", " Bathrooms: ");
    homePagee.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(5);
    });
    homePagee.askingPrice.should("contain", " Asking Price:");
    homePagee.lotSize.should("contain", " Lot Size: ");
    homePagee.listingDate.should("contain", " Listing Date: ");
    homePagee.realtorName.should("contain", " Realtor: ");
    homePagee.propertyTitle.should("be.visible");
  });
  it("Should search by price", () => {
    cy.visit("/");
    homePagee.screenThemeCheckbox.click();
    homePagee.submitButton.click();
    homePagee.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
  });
});
