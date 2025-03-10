import homePage from "../../page_objects/home.page";

describe("Search from HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.screenThemeCheckbox.click();
  });
  it("should search by keyword", () => {
    homePage.propertyNameInput.type("Baltimore");
    homePage.searchBtn.click();

    homePage.isListingPresent.should("have.length.greaterThan", 0);
    homePage.searchedItemHeader.should("be.visible");
  });
  it("Should search by bedrooms", () => {
    homePage.bedroomDropdown.click();
    homePage.clickBedroomsNumber(5);
    homePage.searchBtn.click();

    homePage.isListingPresent.should("have.length.greaterThan", 0);
    homePage.moreInfoButton.click();
    homePage.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(3);
    });
  });
  it("Should search by city", () => {
    homePage.cityNameInput.type("Baltimore");
    homePage.searchBtn.click();

    homePage.cityLabel.should("contain.text", " City:");
    homePage.moreInfoButton.click();
    homePage.garageNumber.should("include.text", " Garage: ");
    homePage.bathroomNumber.should("include.text", " Bathrooms: ");
    homePage.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(5);
    });
    homePage.askingPrice.should("contain", " Asking Price:");
    homePage.lotSize.should("contain", " Lot Size: ");
    homePage.listingDate.should("contain", " Listing Date: ");
    homePage.realtorName.should("contain", " Realtor: ");
    homePage.propertyTitle.should("be.visible");
  });
  it("Should search by price", () => {
    homePage.searchBtn.click();

    homePage.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
  });
});