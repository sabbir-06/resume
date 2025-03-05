class SearchListingPage {
  get clickListingPage() {
    return cy.get('div a[href="/featured-listings"]');
  }
  get errorHandle() {
    return Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
  get typePropertyName() {
    return cy.get('div input[type="text"]').eq(0);
  }
  get typeCityName() {
    return cy.get('input[type="text"]').eq(1);
  }
  get clickToSearch() {
    return cy.get('button[type="button"]').eq(0);
  }
  get checkOneListingPresient1() {
    return cy
      .get(".MuiPaper-root .MuiCardContent-root")
      .should("have.length.greaterThan", 0);
  }
  get propertyNamePresent() {
    return cy.contains("div h5", "Baltimore").should("be.visible");
  }
  get cityName() {
    return cy
      .get(".MuiGrid-root")
      .contains("City: Baltimore")
      .should("be.visible");
  }
  get clickMoreInfo() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get checkmoreInfoPage() {
    return cy
      .contains(".MuiTypography-h4", "Property Realtor")
      .should("be.visible");
  }
  get clickBedroomButton() {
    return cy.get('[role="button"]').eq(0).should("exist").should("be.visible");
  }
  get clickBedroomNumber() {
    return cy.get('ul li[data-value="2"]');
  }
  get checkBedroomNumber() {
    return cy
      .contains("Bedrooms:")
      .invoke("text")
      .then((text) => {
        cy.log(`Extracted text: ${text}`);
        const cleanText = text.replace(/[^\d]/g, "");
        const bedrooms = parseInt(cleanText, 10);
        cy.log(`Parsed number of bedrooms: ${bedrooms}`);
        expect(bedrooms).to.be.at.least(2);
      });
  }
  get checkCity() {
    return cy.get('input[type="text"]').eq(1);
  }
  get checkUrl() {
    return cy
      .url()
      .should("include", "featured-listings?price=500000-10000000");
  }
  get checkTitle() {
    return cy.title().should("eq", "Estate Objects | Delek Homes");
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
  get clickRealstate() {
    return cy.contains("Real Estate");
  }
  get clickCreateListing() {
    return cy.get(".MuiListItemText-root .MuiListItemText-primary").eq(5);
  }
  get typeTitle() {
    return cy.get('[name="title"]');
  }
  get typeDescription() {
    return cy.get('[name="description"]');
  }
  get typeCity() {
    return cy.get('[name="city"]');
  }
  get typeAddress() {
    return cy.get('[name="address"]');
  }
  get typeZipCode() {
    return cy.get('[name="zipCode"]');
  }
  get typePrice() {
    return cy.get('[name="price"]');
  }
  get typeBedrooms() {
    return cy.get('[name="bedrooms"]');
  }
  get typeBathrooms() {
    return cy.get('[name="bathrooms"]');
  }
  get typeGarage() {
    return cy.get('[name="garage"]');
  }
  get typeSqft() {
    return cy.get('[name="sqft"]');
  }
  get typeLotSize() {
    return cy.get('[name="lotSize"]');
  }
  get clickButton() {
    return cy.get('[role="button"]').eq(7);
  }
  get clickState() {
    return cy.get('[data-value="MD"]');
  }
  get imgUpload() {
    return cy.get("div h5");
  }
  get typecheckbox() {
    return cy.get('label [type="checkbox"]');
  }
  get clickSubmit() {
    return cy.get('[type="submit"]');
  }
  get askingPrice() {
    return cy.contains("Asking Price");
  }
  get lotSizeNumber() {
    return cy.contains("Lot Size");
  }
  get garageNumber() {
    return cy.contains("Garage");
  }
}
export default new SearchListingPage();
