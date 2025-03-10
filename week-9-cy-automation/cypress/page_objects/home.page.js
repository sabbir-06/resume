class HomePage {
  get screenThemeCheckbox() {
    return cy.get('[type="checkbox"]');
  }
  get propertyNameInput() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get cityNameInput() {
    return cy.get('input[type="text"]').eq(1);
  }
  get searchBtn() {
    return cy.get('button[type="button"]');
  }
  get isListingPresent() {
    return cy.get(".MuiPaper-root .MuiCardContent-root");
  }
  get searchedItemHeader() {
    return cy.contains("div h5", "Baltimore");
  }
  get moreInfoButton() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get pageTitle() {
    return cy.title().should("eq", "Estate Objects | Delek Homes");
  }
  get filterValue() {
    return cy
      .get(
        ":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff, :nth-child(1) > .MuiPaper-root > .css-79elbk > .css-6yrxxf"
      )
      .eq(0);
  }
  getFilterValue() {
    return this.filterValue.invoke("text").then((text) => {
      return parseFloat(text.replace(/[^0-9.-]+/g, ""));
    });
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
  get propertyTitle() {
    return cy.get("div h3");
  }
  get cityLabel() {
    return cy.get(
      "div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r"
    );
  }
  get bedroomNumber() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(5);
  }
  getBedroomCount() {
    return this.bedroomNumber.invoke("text").then((elText) => {
      return parseInt(elText.replace(/[^\d]/g, ""), 10);
    });
  }
  get bedroomDropdown() {
    return cy.get('div [aria-labelledby=":r2:-label :r2:"]');
  }
  clickBedroomsNumber(numberOfBedrooms) {
    cy.get(`ul li[data-value="${numberOfBedrooms}"]`).click();
  }
}
export default new HomePage();