import searchHomePositive from "../../page_objects/search.home.positive";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should search by keyword", () => {
    searchHomePositive.typePropertyName.type("Baltimore");

    searchHomePositive.clickToSearch.click();

    searchHomePositive.errorHandle;

    // check atleasst one listing is presient
    searchHomePositive.checkOneListingPresent;

    searchHomePositive.searchItemVisible;

    searchHomePositive.clickMoreInfo.click();

    searchHomePositive.propertyRealtorVisible;

    //searchHomePositive.propertyRealtorVisible
  });

  it("Should search by bedrooms", () => {
    searchHomePositive.clickbedroomsbutton.click();

    searchHomePositive.clickBedroomsNumber.click();

    searchHomePositive.clickToSearch.click();

    searchHomePositive.errorHandle;

    searchHomePositive.clickMoreInfo.click();

    // Check if the number of bedrooms is at least 2

    searchHomePositive.checkOneListingPresent;
  });

  it("Should search by city", () => {
    searchHomePositive.typecity.type("Baltimore");
    searchHomePositive.clickToSearch.click();
    searchHomePositive.errorHandle;
    searchHomePositive.searchItemVisible;
    searchHomePositive.clickMoreInfo.click();

    //verify more info page open
    searchHomePositive.propertyRealtorVisible;
  });

  it("Should search by price", () => {
    searchHomePositive.clickToSearch.click();

    searchHomePositive.errorHandle;
    searchHomePositive.priceRange;
    //asert that price rrange expected
    searchHomePositive.filtervalue;
  });
});
