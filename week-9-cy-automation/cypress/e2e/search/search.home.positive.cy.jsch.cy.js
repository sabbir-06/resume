import searchHomePositive from "../../../page_objects/search.home.positive";

describe("search", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    searchHomePositive.typePropertyName.type("Baltimore");
    searchHomePositive.clickToSearch.click();
    // check atleasst one listing is presient
    searchHomePositive.checkOneListingPresent;
    searchHomePositive.searchItemVisible;
    searchHomePositive.clickMoreInfo.click();
    searchHomePositive.propertyRealtorVisible;
  });

  it("Should search by bedrooms", () => {
    searchHomePositive.clickbedroomsbutton.click();
    searchHomePositive.clickBedroomsNumber.click();
    searchHomePositive.clickToSearch.click();
    searchHomePositive.clickMoreInfo.click();
    // Check if the number of bedrooms is at least 2
    searchHomePositive.checkOneListingPresent;
  });

  it("Should search by city", () => {
    searchHomePositive.typecity.type("Baltimore");
    searchHomePositive.clickToSearch.click();
    searchHomePositive.searchItemVisible;
    searchHomePositive.clickMoreInfo.click();
    //verify more info page open
    searchHomePositive.propertyRealtorVisible;
  });

  it("Should search by price", () => {
    searchHomePositive.clickToSearch.click();
    searchHomePositive.priceRange;
    //asert that price rrange expected
    searchHomePositive.filtervalue;
  });
});
