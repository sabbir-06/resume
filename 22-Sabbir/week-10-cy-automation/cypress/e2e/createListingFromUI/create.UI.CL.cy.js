import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
import listingDataUI from "../../fixtures/listingData.UI.json"
import "../../support/commands"
import searchHomePositive from "../../page_objects/search.home.positive";
import searchListingpage from "../../page_objects/search.listingpage";

describe("Login with admin api token and create listing with assertions", () => {
  beforeEach(() => {
    cy.rlogin()
  });

  it("creating a new listing", () => {
    cy.visit(listingDataUI.listingUrl);
    searchListingpage.clickRealstate.click();
    searchListingpage.clickCreateListing.click();
    searchListingpage.typeTitle.type(listingDataUI.title);
    searchListingpage.typeDescription.type(
      listingDataUI.description
    );
    searchListingpage.typeCity.type(listingDataUI.city);
    searchListingpage.typeAddress.type(listingDataUI.address);
    searchListingpage.typeZipCode.type(listingDataUI.zipCode); 
    searchListingpage.clickButton.click();
    searchListingpage.clickState.click();
    searchListingpage.imgUpload.attachFile("img.jpg", { subjectType: "drag-n-drop" });
    searchListingpage.typecheckbox.click();
    searchListingpage.typePrice.type(listingDataUI.price);
    searchListingpage.typeBedrooms.type(listingDataUI.bedrooms);  
    searchListingpage.typeBathrooms.type(listingDataUI.bathrooms);
    searchListingpage.typeGarage.type(listingDataUI.garage);
    searchListingpage.typeSqft.type(listingDataUI.sqft);
    searchListingpage.typeLotSize.type(listingDataUI.lotSize);
    searchListingpage.clickSubmit.click();   
  });

  it("should search by keyword", () => {
    cy.visit("/");
    searchListingpage.typePropertyName.type(listingDataUI.title);
    searchHomePositive.clickToSearch.click();
    searchHomePositive.checkOneListingPresent;
    searchHomePositive.searchItemVisible;
    searchHomePositive.clickMoreInfo.click();
    searchHomePositive.propertyRealtorVisible;
    searchListingpage.askingPrice.should(
      "include.text",
      "Asking Price: $ 1,000,000"
    );
    searchListingpage.lotSizeNumber.should("include.text", " Lot Size: 2");
    
    searchListingpage.garageNumber.should("include.text", " Garage: 2");
  });
});