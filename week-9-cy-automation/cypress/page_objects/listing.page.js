class FeaturedListings {
  get typePropertyName() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get typeCityName() {
    return cy.get('input[type="text"]').eq(1);
  }
  get searchButton() {
    return cy.get('button[type="button"]').eq(0);
  }
  get checkOneListingPresient() {
    return cy.get(".MuiPaper-root .MuiCardContent-root");
  }
  get propertyNamePresent() {
    return cy.get("div h5");
  }
  get propertyPresent(){
    return cy.get("div h3");
  }
  get cityName() {
    return cy.get(".MuiGrid-root").contains("City: Baltimore");
  }
  get clickMoreInfo() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get clickBedroomButton() {
    return cy.get('[role="button"]').eq(0).should("exist").should("be.visible");
  }
  get clickBedroomNumber() {
    return cy.get('ul li[data-value="3"]');
  }
  get checkBedroomNumber() {
    return cy.contains("div", "Bedrooms: ").invoke("text");
  }  
  get checkCity() {
    return cy.get('input[type="text"]').eq(1);
  }
  get checkUrl() {
    return cy
      .url()
   }
  get checkTitle() {
    return cy.title();
  }
  get checkPrice() {
    return cy
      .get(":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff")
      .eq(0)
      .invoke("text")
      .then((text) => {
        const value = parseFloat(text.replace(/[^0-9.-]+/g, ""));
        expect(value).to.be.greaterThan(500000);
      });
  }
  get askingPrice() {
    return cy
    .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
    .eq(0) 
  }
  get squireFeet() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(1)    
  }
  get lotSize() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(2)      
  }
  get listingDate() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(3)      
  }
  get garageNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(4)    
  }
  get bedroomNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(5)     
  }
  get bathroomNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(6)      
  }
  get realtorName() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(7)      
  }
}
export default new FeaturedListings();
