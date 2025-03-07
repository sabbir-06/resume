import homePage from "../../page_objects/home.page";

describe("Search from HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should search by keyword", () => {
    homePage.typePropertyName.type("Baltimore");
    homePage.searchBtn.click();
    
    homePage.checkOneListingPresent.should("have.length.greaterThan", 0);
    homePage.searchItemVisible.should("be.visible");
      });
  it("Should search by bedrooms", () => {
    homePage.clickbedroomsbutton.click();
    homePage.clickBedroomsNumber.click();
    homePage.searchBtn.click();
        
    homePage.checkOneListingPresent.should(
      "have.length.greaterThan",
      0
    );
    homePage.clickMoreInfo.click();

    homePage.bedroomNumber.should("include.text", " Bedrooms: 5");  
  });
  it("Should search by city", () => {
    homePage.typecity.type("Baltimore");
    homePage.searchBtn.click();
        
    homePage.checkcity.should('contain.text', ' City:')    
    homePage.clickMoreInfo.click();   

    homePage.garageNumber.should("include.text", " Garage: ");
    homePage.bathroomNumber.should("include.text", " Bathrooms: ");
    homePage.bedroomNumber.should("include.text", " Bedrooms: "); 
    homePage.askingPrice.should("contain", " Asking Price:");
    homePage.lotSize.should("contain", " Lot Size: ");
    homePage.listingDate.should("contain", " Listing Date: ");
    homePage.realtorName.should("contain", " Realtor: ");
    homePage.propertyPresent.should("be.visible");
  });
  it("Should search by price", () => {
    homePage.searchBtn.click();

    homePage.priceRange.should("include", "featured-listings?price=500000-10000000");
   });
});
