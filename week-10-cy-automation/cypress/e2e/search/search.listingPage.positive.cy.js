import searchListingpage from "../../../page_objects/search.listingpage";

describe("example to-do app", () => {
  beforeEach(() => {
    //cy.visit("/");
    cy.login();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    searchListingpage.clickListingPage.click();

    // searchListingpage.errorHandle;

    searchListingpage.typePropertyName.type("Baltimore");

    searchListingpage.clickToSearch.click();

    // cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click();

    //   // check atleasst one listing is presient
    searchListingpage.checkOneListingPresient;
    searchListingpage.propertyNamePresent;
    searchListingpage.clickMoreInfo.click();
    searchListingpage.checkmoreInfoPage;
  });

  it("Should search by bedrooms", () => {
    searchListingpage.clickListingPage.click();
    // searchListingpage.errorHandle;
    searchListingpage.clickBedroomButton.click();
    searchListingpage.clickBedroomNumber.click();

    //cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click();
    searchListingpage.clickToSearch.click();

    // Check if the number of bedrooms is at least 2

    searchListingpage.checkBedroomNumber;
  });

  it("Should search by city", () => {
    searchListingpage.clickListingPage.click();

    searchListingpage.typeCityName.type("Baltimore");

    searchListingpage.clickToSearch.click();

    // searchListingpage.errorHandle
    searchListingpage.cityName;

    searchListingpage.clickMoreInfo.click();

    //verify more info page open
    searchListingpage.checkmoreInfoPage;
  });

  it("Should search by price", () => {
    searchListingpage.clickListingPage.click();
    searchListingpage.clickToSearch.click();
    //searchListingpage.errorHandle;
    searchListingpage.checkUrl;

    //cy.url().should("include", "featured-listings?price=500000-10000000");

    // Assert that the page title is correct
    searchListingpage.checkTitle;
    // Assert that the price filter value is within the expected range
    searchListingpage.checkPrice;
  });
});
