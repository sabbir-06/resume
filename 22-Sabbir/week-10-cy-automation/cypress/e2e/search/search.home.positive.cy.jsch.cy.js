import searchFromHomePage from "../../page_objects/search.home.positive"
import listingData from "../../fixtures/listingData.json";

describe("search", () => {
  beforeEach(() => {
    cy.rlogin();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    searchFromHomePage.typePropertyName.type(listingData.secondtitile);
    searchFromHomePage.submitButton.click();
    searchFromHomePage.listing.should("have.length.greaterThan", 0);
    searchFromHomePage.searchItemVisible.should("be.visible");
   });

  it("Should search by bedrooms", () => {
    searchFromHomePage.clickbedroomsbutton.click();
    searchFromHomePage.clickBedroomsNumber.click();
    searchFromHomePage.submitButton.click();
    searchFromHomePage.listing.should("have.length.greaterThan", 0);
    });

  it("Should search by city", () => {
    searchFromHomePage.typecity.type(listingData.searchcity);
    searchFromHomePage.submitButton.click();
    searchFromHomePage.cityName.should('contain.text', ' City:');  
    searchFromHomePage.clickMoreInfo.click();    
    searchFromHomePage.garageNumber.should("include.text", " Garage: ");
    searchFromHomePage.bathroomsNamber.should("include.text", " Bathrooms: ");
    searchFromHomePage.bedroomNumber.should("include.text", " Bedrooms: ");
  });

  it("Should search by price", () => {
    searchFromHomePage.submitButton.click();
    searchFromHomePage.priceRange.should("include", "featured-listings?price=500000-10000000");
    searchFromHomePage.filterValue;
  });
});
