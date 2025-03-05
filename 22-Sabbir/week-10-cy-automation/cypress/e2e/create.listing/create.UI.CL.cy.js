import LoginPage from "../../page_objects/login.page";
import HomePage from "../../page_objects/home.page";
import DashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/userCredentais.json";
import listingDataUI from "../../fixtures/listingData.UI.json"
import "../../support/commands"
import SearchHomePositive from "../../page_objects/search.home.positive";
import SearchListingpage from "../../page_objects/search.listingpage";

describe("Login with admin api token and create listing with assertions", () => {
  beforeEach(() => {
    cy.rlogin()
  });

  it("creating a new listing", () => {
    cy.visit(listingDataUI.listingUrl);
    SearchListingpage.clickRealstate.click();
    SearchListingpage.clickCreateListing.click();
    SearchListingpage.typeTitle.type(listingDataUI.title);
    SearchListingpage.typeDescription.type(
      listingDataUI.description
    );
    SearchListingpage.typeCity.type(listingDataUI.city);
    SearchListingpage.typeAddress.type(listingDataUI.address);
    SearchListingpage.typeZipCode.type(listingDataUI.zipCode); 
    SearchListingpage.clickButton.click();
    SearchListingpage.clickState.click();
    SearchListingpage.imgUpload.attachFile("img.jpg", { subjectType: "drag-n-drop" });
    SearchListingpage.typecheckbox.click();
    SearchListingpage.typePrice.type(listingDataUI.price);
    SearchListingpage.typeBedrooms.type(listingDataUI.bedrooms);  
    SearchListingpage.typeBathrooms.type(listingDataUI.bathrooms);
    SearchListingpage.typeGarage.type(listingDataUI.garage);
    SearchListingpage.typeSqft.type(listingDataUI.sqft);
    SearchListingpage.typeLotSize.type(listingDataUI.lotSize);
    SearchListingpage.clickSubmit.click();   
    SearchListingpage.askingPrice.should(
      "include.text",
      "Asking Price: $ 1,000,000"
    );
    SearchListingpage.lotSizeNumber.should("include.text", " Lot Size: 2");
    
    SearchListingpage.garageNumber.should("include.text", " Garage: 2");
  });

  it("should search by keyword", () => {
    cy.visit("/");
    SearchListingpage.typePropertyName.type(listingDataUI.title);
    SearchHomePositive.clickToSearch.click();
    SearchHomePositive.checkOneListingPresent;
    SearchHomePositive.searchItemVisible;
    SearchHomePositive.clickMoreInfo.click();
    SearchHomePositive.propertyRealtorVisible;
    
  });
});