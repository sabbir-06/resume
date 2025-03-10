import listingDataUI from "../../fixtures/listingData.UI.json";
import "../../support/commands";
import featureListing from "../../page_objects/feature.listing";

describe("Login with admin api token and create listing with assertions", () => {
  beforeEach(() => {
    cy.rlogin();
  });
  
  it("creating a new listing", () => {
    cy.visit(listingDataUI.listingUrl);
    featureListing.realEstateTab.click();
    featureListing.createListingButton.click();
    featureListing.titleInput.type(listingDataUI.title);
    featureListing.descriptionInput.type(listingDataUI.description);
    featureListing.cityInput.type(listingDataUI.city);
    featureListing.addressInput.type(listingDataUI.address);
    featureListing.zipCodeInput.type(listingDataUI.zipCode);
    featureListing.actionButton.click();
    featureListing.stateDropdownOption.click();
    featureListing.imageUploadSection.attachFile("img.jpg", {
      subjectType: "drag-n-drop",
    });
    featureListing.agreementCheckbox.click();
    featureListing.priceInput.type(listingDataUI.price);
    featureListing.bedroomsInput.type(listingDataUI.bedrooms);
    featureListing.bathroomsInput.type(listingDataUI.bathrooms);
    featureListing.garageInput.type(listingDataUI.garage);
    featureListing.sqftInput.type(listingDataUI.sqft);
    featureListing.lotSizeInput.type(listingDataUI.lotSize);
    featureListing.submitButton.click();
    cy.visit("/");
    featureListing.propertyNameInput.type(listingDataUI.title);
    featureListing.submitBtn.click();
    featureListing.isListingPresent.should(
      "have.length.greaterThan",
      0
    );  
    featureListing.moreInfoButton.click();

    featureListing.askingPrice.should(
      "include.text",
      "Asking Price: $ 1,000,000"
    );
    featureListing.lotSize.should("include.text", " Lot Size: 2");
    featureListing.garageNumber.should("include.text", " Garage: 2");  
    featureListing.propertyRealtorVisible;
  });
});          