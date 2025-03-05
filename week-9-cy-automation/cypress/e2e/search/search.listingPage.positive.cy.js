import FeaturedListings from "../../page_objects/search.listingpage";
import "../../support/commands";
describe("Search from featured-listings ", () => {
  beforeEach(() => {
    //cy.login();
    cy.visit("/");
  });
  it("should search by keyword", () => {
    cy.visit("/featured-listings");
    FeaturedListings.typePropertyName.type("Baltimore");
    FeaturedListings.searchButton.click();

    FeaturedListings.checkOneListingPresient.should("have.length.greaterThan", 0);

    FeaturedListings.propertyNamePresent.should("be.visible");
   });
  it("Should search by bedrooms", () => {
    cy.visit("/featured-listings");
    FeaturedListings.clickBedroomButton.click();
    FeaturedListings.clickBedroomNumber.click();
    FeaturedListings.searchButton.click();

    FeaturedListings.checkBedroomNumber;
  });
  it("Should search by city", () => {
    cy.visit("/featured-listings");
    FeaturedListings.typeCityName.type("Baltimore");
    FeaturedListings.searchButton.click();

    FeaturedListings.cityName.should('be.visible');

    FeaturedListings.garageNumber.should("include.text", " Garage: ");

    FeaturedListings.bathroomNumber.should("include.text", " Bathrooms: ");

    FeaturedListings.bedroomNumber.should("include.text", " Bedrooms: ");  
  });
  it("Should search by price", () => {
    FeaturedListings.searchButton.click();

    FeaturedListings.checkUrl.should("include", "featured-listings?price=500000-10000000");

    FeaturedListings.checkTitle.should("eq", "Estate Objects | Delek Homes");

    FeaturedListings.checkPrice;
  });
});
