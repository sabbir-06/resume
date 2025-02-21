import searchListingpage from "../../page_objects/search.listingpage";
import lisingdata from "../../fixtures/listingData.json";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should search by keyword", () => {
    searchListingpage.clickListingPage.click();
    searchListingpage.typePropertyName.type(lisingdata.searchcity);
    searchListingpage.clickToSearch.click();
    searchListingpage.checkOneListingPresient1.should("have.length.greaterThan", 0);
    searchListingpage.propertyNamePresent;
    searchListingpage.clickMoreInfo.click();
    searchListingpage.checkmoreInfoPage;
  });

  it("Should search by bedrooms", () => {
    searchListingpage.clickListingPage.click();
    searchListingpage.clickBedroomButton.click();
    searchListingpage.clickBedroomNumber.click();
    searchListingpage.clickToSearch.click();
    searchListingpage.clickMoreInfo.click();
    searchListingpage.checkBedroomNumber;
  });

  it("Should search by city", () => {
    searchListingpage.clickListingPage.click();
    searchListingpage.typeCityName.type(lisingdata.searchcity);
    searchListingpage.clickToSearch.click();
    searchListingpage.cityName;
    searchListingpage.clickMoreInfo.click();
    searchListingpage.checkmoreInfoPage;
  });

  it("Should search by price", () => {
    searchListingpage.clickListingPage.click();
    searchListingpage.clickToSearch.click();
    searchListingpage.checkUrl;
    searchListingpage.checkTitle;
    searchListingpage.checkPrice;
  });
});
