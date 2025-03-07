class HomePage {
  get typePropertyName() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get typecity() {
    return cy.get('input[type="text"]').eq(1);
  }
  get searchBtn() {
    return cy.get('button[type="button"]');
  }
  get checkOneListingPresent() {
    return cy.get(".MuiPaper-root .MuiCardContent-root");
  }
  get searchItemVisible() {
    return cy.contains("div h5", "Baltimore");
  }
  get clickMoreInfo() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get clickbedroomsbutton() {
    return cy.get('div [aria-labelledby=":r2:-label :r2:"]');
  }
  get clickBedroomsNumber() {
    return cy.get('ul li[data-value="2"]');
  }
  get priceRange() {
    return cy.url();
  }
  get CheckpageTitle() {
    return cy.title().should("eq", "Estate Objects | Delek Homes");
  }
  get filtervalue() {
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
  get propertyPresent(){
    return cy.get("div h3");
  }  
  get checkcity() {
    return cy.get(
      "div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r"
    );
  }
}
export default new HomePage();


