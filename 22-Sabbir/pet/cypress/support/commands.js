// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-mailosaur';
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import 'cypress-file-upload';

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
 import './commands';

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// In your cypress/support/commands.js file
// Cypress.Commands.add("selectDropdownOption", (questionId, optionText) => {
//     // Open the dropdown control for the specific question
//     cy.get(`[data-questionid="${questionId}"] .select2-selection`)
//       .should("be.visible")
//       .click();
      
//     // Wait for the dropdown options container to appear
//     cy.get("ul.select2-results__options", { timeout: 10000 })
//       .should("be.visible");
      
//     // Click the desired option (force click if needed)
//     cy.get("ul.select2-results__options")
//       .contains(optionText)
//       .should("be.visible")
//       .click({ force: true });
      
//     // Optionally, wait until the dropdown options container is no longer visible
//     cy.get("ul.select2-results__options", { timeout: 10000 })
//       .should("not.be.visible");
//   });
  