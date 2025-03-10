class FeaturedListings {
  get propertyNameInput() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get screenThemeCheckbox() {
    return cy.get('[type="checkbox"]');
  }
  get cityNameInput() {
    return cy.get('input[type="text"]').eq(1);
  }
  get searchButton() {
    return cy.get('button[type="button"]').eq(0);
  }
  get isListingPresent() {
    return cy.get(".MuiPaper-root .MuiCardContent-root");
  }
  get propertyNameHeading() {
    return cy.get("div h5");
  }
  get propertyTitle() {
    return cy.get("div h3");
  }
  get cityName() {
    return cy.get(".MuiGrid-root").contains("City: Baltimore");
  }
  get moreInfoButton() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get bedroomDropdown() {
    return cy.get('[role="button"]').eq(0).should("exist").should("be.visible");
  }
  get bedroomOptionThree() {
    return cy.get('ul li[data-value="3"]');
  }
  get getBedroomNumberText() {
    return cy.contains("div", "Bedrooms: ").invoke("text");
  }
  get cityInput() {
    return cy.get('input[type="text"]').eq(1);
  }
  get pageTitle() {
    return cy.title();
  }

  get askingPrice() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(0);
  }
  get squareFeet() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(1);
  }
  get lotSize() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(2);
  }
  get listingDate() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(3);
  }
  get garageNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(4);
  }
  get bedroomNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(5);
  }
  get bathroomNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(6);
  }
  get realtorName() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(7);
  }
  get priceElement() {
    return cy
      .get(
        ":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff, :nth-child(1) > .MuiPaper-root > .css-79elbk > .css-6yrxxf"
      )
      .eq(0);
  }
  getFilterValue() {
    return this.priceElement.invoke("text").then((text) => {
      return parseFloat(text.replace(/[^0-9.-]+/g, ""));
    });
  }
}
export default new FeaturedListings();