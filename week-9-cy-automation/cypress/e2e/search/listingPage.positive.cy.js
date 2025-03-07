import featuredListing from "../../page_objects/listing.page";
import homePage from "../../page_objects/home.page";
import "../../support/commands";

describe("Search from featured-listings ", () => {
  beforeEach(() => {
    //cy.login();
    cy.visit("/");
  });
  it("should search by keyword", () => {
    cy.visit("/featured-listings");
    featuredListing.typePropertyName.type("Baltimore");
    featuredListing.searchButton.click();

    featuredListing.checkOneListingPresient.should(
      "have.length.greaterThan",
      0
    );

    featuredListing.propertyNamePresent.should("be.visible");
  });
  it("Should search by bedrooms", () => {
    cy.visit("/featured-listings");
    featuredListing.clickBedroomButton.click();
    featuredListing.clickBedroomNumber.click();
    featuredListing.searchButton.click();

    featuredListing.checkBedroomNumber.then((text) => {
      cy.log(`Extracted text: ${text}`);
      const cleanText = text.replace(/[^\d]/g, "");
      const bedrooms = parseInt(cleanText, 10);
      expect(bedrooms).to.be.at.least(2);
    });
  });
  it("Should search by city", () => {
    cy.visit("/featured-listings");
    featuredListing.typeCityName.type("Baltimore");
    featuredListing.searchButton.click();

    featuredListing.cityName.should("be.visible");
    homePage.clickMoreInfo.click();

    featuredListing.garageNumber.should("include.text", " Garage: ");
    featuredListing.bathroomNumber.should("include.text", " Bathrooms: ");
    featuredListing.bedroomNumber.should("include.text", " Bedrooms: ");
    featuredListing.askingPrice.should("contain", " Asking Price:");
    featuredListing.lotSize.should("contain", " Lot Size: ");
    featuredListing.listingDate.should("contain", " Listing Date: ");
    featuredListing.realtorName.should("contain", " Realtor: ");
    featuredListing.propertyPresent.should("be.visible"); 
  });
  it("Should search by price", () => {
    featuredListing.searchButton.click();

    featuredListing.checkUrl.should(
      "include",
      "featured-listings?price=500000-10000000"
    );
    featuredListing.checkTitle.should("eq", "Estate Objects | Delek Homes");
  });
});
