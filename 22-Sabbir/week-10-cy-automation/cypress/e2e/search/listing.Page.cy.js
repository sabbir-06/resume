import FeaturedListingsPage from "../../page_objects/feature.listing";
import listingData from "../../fixtures/listingData.json"

describe("search from feaure listing page", () => {
  beforeEach(() => {
    cy.rlogin();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    cy.visit("/");
    FeaturedListingsPage.screenThemeCheckbox.click();
    FeaturedListingsPage.propertyNameInput.type(listingData.secondtitile);
    FeaturedListingsPage.submitButton.click();

    FeaturedListingsPage.propertyListings.should("have.length.greaterThan", 0);
    FeaturedListingsPage.searchResultHeader.should("be.visible");
   });
  it("Should search by bedrooms", () => {
    cy.visit("/");
    FeaturedListingsPage.screenThemeCheckbox.click();
    FeaturedListingsPage.bedroomDropdown.click();
    FeaturedListingsPage.bedroomOptionTwo.click();
    FeaturedListingsPage.submitButton.click();

    FeaturedListingsPage.propertyListings.should("have.length.greaterThan", 0);
    FeaturedListingsPage.moreInfoButton.click();
    FeaturedListingsPage.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(3);
    });
    });
  it("Should search by city", () => {
    cy.visit("/");
    FeaturedListingsPage.screenThemeCheckbox.click();
    FeaturedListingsPage.cityInput.type(listingData.city);    
    FeaturedListingsPage.submitButton.click();

    FeaturedListingsPage.cityLabel.should("contain.text", " City:");
    FeaturedListingsPage.moreInfoButton.click();
    FeaturedListingsPage.garageNumber.should("include.text", " Garage: ");
    FeaturedListingsPage.bathroomNumber.should("include.text", " Bathrooms: ");
    FeaturedListingsPage.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(5);
    });
    FeaturedListingsPage.askingPrice.should("contain", " Asking Price:");
    FeaturedListingsPage.lotSize.should("contain", " Lot Size: ");
    FeaturedListingsPage.listingDate.should("contain", " Listing Date: ");
    FeaturedListingsPage.realtorName.should("contain", " Realtor: ");
    FeaturedListingsPage.propertyTitle.should("be.visible");
  });
  it("Should search by price", () => {
    cy.visit("/");
    FeaturedListingsPage.screenThemeCheckbox.click();
    FeaturedListingsPage.submitButton.click();
    FeaturedListingsPage.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
  });
});
