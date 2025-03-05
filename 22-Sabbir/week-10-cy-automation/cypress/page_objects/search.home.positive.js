class SearchFromHomePage {
  get typePropertyName() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get typecity() {
    return cy.get('input[type="text"]').eq(1);
  }
  get cityName() {
    return cy.contains("City:");
  }
  get submitButton() {
    return cy.get('button[type="button"]');
  }
  get errorHandle() {
    return Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
  get listing() {
    return cy
      .get(".MuiPaper-root .MuiCardContent-root")
   }
  get searchItemVisible() {
    return cy.contains("div h5", "Monday Home")
  }
  get clickMoreInfo() {
    return cy.get('[href^="/featured-listings/"]').eq(0);
  }
  get propertyRealtorVisible() {
    return cy
      .contains(".MuiTypography-h4", "Property Realtor")
  }
  get clickbedroomsbutton() {
    return cy.get('div [aria-labelledby=":r2:-label :r2:"]');
  }
  get clickBedroomsNumber() {
    return cy.get('ul li[data-value="2"]');
  }
  get priceRange() {
    return cy
      .url()
      
  }
  get checkPageTitle() {
    return cy.title()
  }
  get filterValue() {
    return cy
      .get(":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff")
      .eq(0)
      .invoke("text")
      .then((text) => {
        const value = parseFloat(text.replace(/[^0-9.-]+/g, ""));
        expect(value).to.be.greaterThan(500000);
      });
  }
  get desertLandHeading() {
    return cy.contains("div h5", "Desert Land");
  }
  get askingPrice() {
    return cy.contains("Asking Price");
  }
  get lotSizeA() {
    return cy.contains(" Lot Size");
  }
  get garageNumber() {
    return cy.contains("Garage");
  }
  get bathroomsNamber() {
    return cy.contains("Bathrooms");
  }
  get bedroomNumber() {
    return cy.contains("Bedrooms");
  }  
}
export default new SearchFromHomePage();
