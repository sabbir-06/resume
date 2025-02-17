
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

  get errorHandle() {
    return Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  checkOneListingPresent() {
    // check at least one listing is present
    return cy.get(".MuiPaper-root .MuiCardContent-root").should(
      "have.length.greaterThan",
      0
    );
  }

  searchItemVisible() {
    return cy.contains("div h5", "Monday Home").should("be.visible");
  }

  get clickMoreInfo() {
    return cy.get('[href^="/featured-listings/"]').eq(0);
  }

  get propertyRealtorVisible() {
    return cy
      .contains(".MuiTypography-h4", "Property Realtor")
      .should("be.visible");
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
      .should("include", "featured-listings?price=500000-10000000");
  }

  get checkPageTitle() {
    return cy.title().should("eq", "Estate Objects | Delek Homes");
  }

  get filterValue() {
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
}

export default new SearchFromHomePage();
















////////////////////////////////////
// class searchfromHomePage {
//     get typePropertyName() {
//       return cy.get('div input[type="text"]').eq(0);
//     }
//     get typecity() {
//       return cy.get('input[type="text"]').eq(1);
//     }
//     get clickToSearch() {
//       return cy.get('button[type="button"]');
//     }
  
//     get errorHandle() {
//       return Cypress.on("uncaught:exception", (err, runnable) => {
//         return false;
//       });
//     }
  
//     get checkOneListingPresent() {
//       return; // check atleasst one listing is presient
//       cy.get(".MuiPaper-root .MuiCardContent-root").should(
//         "have.length.greaterThan",
//         0
//       );
//     }
  
//     get searchItemVisible() {
//       return cy.contains("div h5", "Monday Home").should("be.visible");
//     }
  
//     get clickMoreInfo() {
//       return cy.get('a.MuiButtonBase-root[href^="/featured-listings/"]').eq(0);
//     }
  
//     get propertyRealtorVisible() {
//       return cy
//         .contains(".MuiTypography-h4", "Property Realtor")
//         .should("be.visible");
//     }
  
//     get clickbedroomsbutton() {
//       return cy.get('div [aria-labelledby=":r2:-label :r2:"]');
//     }
  
//     get clickBedroomsNumber() {
//       return cy.get('ul li[data-value="2"]');
//     }
  
//     get priceRange() {
//       return cy
//         .url()
//         .should("include", "featured-listings?price=500000-10000000");
//     }
  
//     get CheckpageTitle() {
//       return cy.title().should("eq", "Estate Objects | Delek Homes");
//     }
  
//     get filtervalue() {
//       return cy
//         .get(":nth-child(1) > .MuiPaper-root > .css-79elbk > .css-dc9kff")
//         .eq(0)
//         .invoke("text") // Get the text content of the element
//         .then((text) => {
//           // Convert the text to a number and assert it is greater than 500000
//           const value = parseFloat(text.replace(/[^0-9.-]+/g, "")); // Remove any non-numeric characters
//           expect(value).to.be.greaterThan(500000);
//         });
//     }
//   }
  
  
//   export default new searchfromHomePage();


  