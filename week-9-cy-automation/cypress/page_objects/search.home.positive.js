class SearchFromHomePage {
  get typePropertyName() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get typecity() {
    return cy.get('input[type="text"]').eq(1);
  }
  get clickToSearch() {
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
  get propertyRealtorVisible() {
    return cy.contains(".MuiTypography-h4", "Property Realtor");
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
  get CheckpageTitle() {
    return cy.title().should("eq", "Estate Objects | Delek Homes");
  }
  get filtervalue() {
    return cy
      .get(":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff")
      .eq(0)
      .invoke("text") // Get the text content of the element
      .then((text) => {
        // Convert the text to a number and assert it is greater than 500000
        const value = parseFloat(text.replace(/[^0-9.-]+/g, "")); // Remove any non-numeric characters
        expect(value).to.be.greaterThan(500000);
      });
  }
  get askingPrice() {
    return cy.contains("Asking Price");
  }
  get lotSizeA() {
    return cy.contains(" Lot Size");
  }
  get garage() {
    return cy.contains("Garage");
  }
  get bathroom() {
    return cy.contains("Bathrooms");
  }
  get bedroom() {
    return cy.contains("Bedrooms");
  }

  get checkcity() {
    return cy.get('div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r');
  }
}
export default new SearchFromHomePage();
