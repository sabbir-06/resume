// ApplicationFormPage.js
class DropDownPage {
    selectDropdown(questionId) {
      cy.get(`[data-questionid="${questionId}"] .select2-selection`)
        .should("be.visible")
        .trigger("mouseover")
        .click();
      cy.get("ul.select2-results__options", { timeout: 10000 }).should(
        "be.visible"
      );
      cy.get("ul.select2-results__options")
        .contains("Yes")
        .trigger("mouseover")
        .trigger("mousedown")
        .click();
      cy.get("ul.select2-results__options").should("not.exist");
    }
  }
  
  export default new DropDownPage();

