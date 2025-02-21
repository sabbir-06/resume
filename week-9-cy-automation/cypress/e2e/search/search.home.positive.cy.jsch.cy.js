import SearchFromHomePage from "../../page_objects/search.home.positive";
describe("Search from HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should search by keyword", () => {
    SearchFromHomePage.typePropertyName.type("Baltimore");
    SearchFromHomePage.clickToSearch.click();
    
    SearchFromHomePage.checkOneListingPresent.should("have.length.greaterThan", 0);
    SearchFromHomePage.searchItemVisible.should("be.visible");
      });
  it("Should search by bedrooms", () => {
    SearchFromHomePage.clickbedroomsbutton.click();
    SearchFromHomePage.clickBedroomsNumber.click();
    SearchFromHomePage.clickToSearch.click();
        
    SearchFromHomePage.checkOneListingPresent.should(
      "have.length.greaterThan",
      0
    );
    SearchFromHomePage.clickMoreInfo.click();

    SearchFromHomePage.bedroom.should("include.text", " Bedrooms: 5");  
  });
  it("Should search by city", () => {
    SearchFromHomePage.typecity.type("Baltimore");
    SearchFromHomePage.clickToSearch.click();
        
    SearchFromHomePage.checkcity.should('contain.text', ' City:')    
    SearchFromHomePage.clickMoreInfo.click();   
    
    SearchFromHomePage.garage.should("include.text", " Garage: ");

    SearchFromHomePage.bathroom.should("include.text", " Bathrooms: ");

    SearchFromHomePage.bedroom.should("include.text", " Bedrooms: ");  
  });
  it("Should search by price", () => {
    SearchFromHomePage.clickToSearch.click();
    SearchFromHomePage.priceRange.should("include", "featured-listings?price=500000-10000000");
    
    SearchFromHomePage.filtervalue;
  });
});
