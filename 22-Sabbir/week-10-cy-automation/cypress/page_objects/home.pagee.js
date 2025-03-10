class HomePage {
  get screenThemeCheckbox() {
    return cy.get('[type="checkbox"]');
  }
  get propertyNameInput() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get cityInput() {
    return cy.get('input[type="text"]').eq(1);
  }
  get cityName() {
    return cy.contains("City:");
  }
  get submitButton() {
    return cy.get('button[type="button"]');
  }
  get cityLabel() {
    return cy.get(
      "div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r"
    );
  }
  get propertyListings() {
    return cy.get(".MuiPaper-root .MuiCardContent-root");
  }
  get searchResultHeader() {
    return cy.contains("div h5", "Monday Home");
  }
  get moreInfoButton() {
    return cy.get('[href^="/featured-listings/"]').eq(0);
  }
  get propertyRealtorVisible() {
    return cy.contains(".MuiTypography-h4", "Property Realtor");
  }
  get bedroomDropdown() {
    return cy.get('div [aria-labelledby=":r2:-label :r2:"]');
  }
  get bedroomOptionTwo() {
    return cy.get('ul li[data-value="2"]');
  }
  get currentURL() {
    return cy.url();
  }
  get checkPageTitle() {
    return cy.title();
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
  get realtorName() {
    return cy
      .get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1s50f5r")
      .eq(7);
  }
  get propertyTitle() {
    return cy.get("div h3");
  }
  get bathroomNumber() {
    return cy.contains("Bathrooms");
  }
  get bedroomNumber() {
    return cy.contains("Bedrooms");
  }
  get loginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get registerBtn() {
    return cy.get('[href="/auth/register"]');
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
}

export default new HomePage();