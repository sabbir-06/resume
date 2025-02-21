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
    return cy.contains("div h5", "Baltimore");
  }
  get cityName() {
    return cy.get(".MuiGrid-root").contains("City: Baltimore");
  }
  get clickMoreInfo() {
    return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
  }
  get checkmoreInfoPage() {
    return cy.contains(".MuiTypography-h4", "Property Realtor");
  }
  get clickBedroomButton() {
    return cy.get('[role="button"]').eq(0).should("exist").should("be.visible");
  }
  get clickBedroomNumber() {
    return cy.get('ul li[data-value="3"]');
  }
  get checkBedroomNumber() {
    return cy
      .contains("div", "Bedrooms: ")
      .invoke("text")
      .then((text) => {
        cy.log(`Extracted text: ${text}`); // Log the extracted text for debugging
        const cleanText = text.replace(/[^\d]/g, ""); // Remove non-digit characters, preserving only the digits
        const bedrooms = parseInt(cleanText, 10);
        cy.log(`Parsed number of bedrooms: ${bedrooms}`); // Log the parsed number
        expect(bedrooms).to.be.at.least(2);
      });
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
      .invoke("text") // Get the text content of the element
      .then((text) => {
        // Convert the text to a number and assert it is greater than 500000
        const value = parseFloat(text.replace(/[^0-9.-]+/g, "")); // Remove any non-numeric characters
        expect(value).to.be.greaterThan(500000);
      });
  }
  get garageNumber() {
    return cy.get("div");
  }

  get bathroomNumber() {
    return cy.get("div");
  }

  get bedroomNumber() {
    return cy.get("div");
  }
}
export default new FeaturedListings();
