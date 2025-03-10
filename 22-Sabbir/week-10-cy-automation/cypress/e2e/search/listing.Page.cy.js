import featureListing from "../../page_objects/feature.listing";
import listingData from "../../fixtures/listingData.json"

describe("search from feaure listing page", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    cy.visit("/");
    featureListing.screenThemeCheckbox.click();
    featureListing.propertyNameInput.type(listingData.secondtitile);
    featureListing.submitButton.click();

    featureListing.propertyListings.should("have.length.greaterThan", 0);
    featureListing.searchResultHeader.should("be.visible");
   });
  it("Should search by bedrooms", () => {
    cy.visit("/");
    featureListing.screenThemeCheckbox.click();
    featureListing.bedroomDropdown.click();
    featureListing.bedroomOptionTwo.click();
    featureListing.submitButton.click();

    featureListing.propertyListings.should("have.length.greaterThan", 0);
    featureListing.moreInfoButton.click();
    featureListing.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(3);
    });
    });
  it("Should search by city", () => {
    cy.visit("/");
    featureListing.screenThemeCheckbox.click();
    featureListing.cityInput.type(listingData.city);    
    featureListing.submitButton.click();

    featureListing.cityLabel.should("contain.text", " City:");
    featureListing.moreInfoButton.click();
    featureListing.garageNumber.should("include.text", " Garage: ");
    featureListing.bathroomNumber.should("include.text", " Bathrooms: ");
    featureListing.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(5);
    });
    featureListing.askingPrice.should("contain", " Asking Price:");
    featureListing.lotSize.should("contain", " Lot Size: ");
    featureListing.listingDate.should("contain", " Listing Date: ");
    featureListing.realtorName.should("contain", " Realtor: ");
    featureListing.propertyTitle.should("be.visible");
  });
  it("Should search by price", () => {
    cy.visit("/");
    featureListing.screenThemeCheckbox.click();
    featureListing.submitButton.click();
    featureListing.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
  });
});
