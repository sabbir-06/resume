import homePagee from "../../page_objects/home.pagee";
import listingData from "../../fixtures/listingData.json";

before(() => {
  cy.fixture("listingData").as("listingData");
  cy.fixture("img.jpg").as("image");
  cy.loginAndGetToken().then((token) => {
    cy.get("@listingData").then((data) => {
      cy.get("@image").then((image) => {
        cy.createListing(data, image, token).as("listingResponse");
      });
    });
  });
  cy.visit("/");
  homePagee.screenThemeCheckbox.click();
});
  it("should search by keyword", () => {   
    homePagee.propertyNameInput.type(listingData.titile);
    homePagee.submitButton.click();

    homePagee.propertyListings.should("contain.text", listingData.secondtitle);
    homePagee.searchResultHeader.should("be.visible");
  });
  it("Should search by bedrooms", () => {
    homePagee.bedroomDropdown.click();
    homePagee.bedroomOptionTwo.click();
    homePagee.submitButton.click();
    homePagee.moreInfoButton.click();

    homePagee.getBedroomCount().then((bedroomCount) => {
      expect(bedroomCount).to.be.gte(3);
    });
  });
  it("Should search by city", () => {
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
    homePagee.propertyNameInput.type(listingData.titile);
    homePagee.submitButton.click();
    homePagee.moreInfoButton.click();

    homePagee.getFilterValue().then((value) => {
      expect(value).to.be.greaterThan(500000);
    });
  });

 