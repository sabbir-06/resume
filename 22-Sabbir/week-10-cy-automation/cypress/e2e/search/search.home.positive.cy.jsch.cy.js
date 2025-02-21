import SearchFromHomePage from "../../page_objects/search.home.positive"
import listingData from "../../fixtures/listingData.json";

describe("search", () => {
  beforeEach(() => {
    cy.rlogin();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    SearchFromHomePage.typePropertyName.type(listingData.secondtitile);
    SearchFromHomePage.submitButton.click();
    SearchFromHomePage.checkOneListingPresent.should("have.length.greaterThan", 0);
    SearchFromHomePage.searchItemVisible.should("be.visible");
   });

  it("Should search by bedrooms", () => {
    SearchFromHomePage.clickbedroomsbutton.click();
    SearchFromHomePage.clickBedroomsNumber.click();
    SearchFromHomePage.submitButton.click();
    SearchFromHomePage.checkOneListingPresent.should("have.length.greaterThan", 0);
    });

  it("Should search by city", () => {
    SearchFromHomePage.typecity.type(listingData.searchcity);
    SearchFromHomePage.submitButton.click();

    SearchFromHomePage.cityName.should('contain.text', ' City:');  
    SearchFromHomePage.clickMoreInfo.click();
    
    SearchFromHomePage.garageNumber.should("include.text", " Garage: ");

    SearchFromHomePage.bathroomsNamber.should("include.text", " Bathrooms: ");

    SearchFromHomePage.bedroomNumber.should("include.text", " Bedrooms: ");
  });

  it("Should search by price", () => {
    SearchFromHomePage.submitButton.click();
    SearchFromHomePage.priceRange.should("include", "featured-listings?price=500000-10000000");
    SearchFromHomePage.filterValue;
  });
});
