import featuredListing from "../../page_objects/listing.page";
import "../../support/commands";

describe("Search from featured-listings ", () => {
  beforeEach(() => {
    cy.visit("/");
    featuredListing.screenThemeCheckbox.click();
   });
  it("should search by keyword", () => {
    cy.visit("/featured-listings");
    featuredListing.propertyNameInput.type("Baltimore");
    featuredListing.searchButton.click();

    featuredListing.isListingPresent.should(
      "have.length.greaterThan",
      0
    );  
    featuredListing.propertyNameHeading.should("be.visible");
  });
  it("Should search by bedrooms", () => {
    cy.visit("/featured-listings");
    featuredListing.bedroomDropdown.click();
    featuredListing.bedroomOptionThree.click();
    featuredListing.searchButton.click();

    featuredListing.getBedroomNumberText.then((text) => {
      cy.log(`Extracted text: ${text}`);
      const cleanText = text.replace(/[^\d]/g, "");
      const bedrooms = parseInt(cleanText, 10);
      expect(bedrooms).to.be.at.least(2);
    });
  });
  it("Should search by city", () => {
    cy.visit("/featured-listings");
    featuredListing.cityInput.type("Baltimore");
    featuredListing.searchButton.click();
    featuredListing.cityName.should("be.visible");
    featuredListing.moreInfoButton.click();
   
    featuredListing.garageNumber.should("include.text", " Garage: ");
    featuredListing.bathroomNumber.should("include.text", " Bathrooms: ");
    featuredListing.bedroomNumber.should("include.text", " Bedrooms: ");
    featuredListing.askingPrice.should("contain", " Asking Price:");
    featuredListing.lotSize.should("contain", " Lot Size: ");
    featuredListing.listingDate.should("contain", " Listing Date: ");
    featuredListing.realtorName.should("contain", " Realtor: ");
    featuredListing.squareFeet.should("contain", " Square Feet: ");
    featuredListing.propertyTitle.should("be.visible"); 
  });
  it("Should search by price", () => {
    featuredListing.searchButton.click();

    featuredListing.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
    featuredListing.pageTitle.should("eq", "Estate Objects | Delek Homes");
  });
});
