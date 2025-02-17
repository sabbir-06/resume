import loginPage from "../../page_objects/login.page";

import homePage from "../../page_objects/home.page";

import dashboardPage from "../../page_objects/dashboard.page";

import user from "../../fixtures/userCredentais.json";

import verification from "../../fixtures/Verification.json";

import "../../support/commands";

import searchHomePositive from "../../page_objects/search.home.positive";

describe("Login with admin api token and create listing with assertions", () => {
  beforeEach(() => {
    cy.request("POST", "/api/users/login", {
      email: "testadmin@gmail.com",
      password: "newpas",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      //expect(response.body).to.have.property('name', 'Jane') // true
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  });

  it("creating a new listing", () => {
    cy.visit("https://dev.delekhomes.com/dashboard/user/profile");

    //verifing that user log-in as admin and tile user profile and delekhome

    dashboardPage.roleLbl.should("have.text", `role: ${verification.role}`); //fixture verification
    cy.title().should("eq", verification.title);

    //cy.get('[role="img"]').eq(3).click();

    cy.contains("Real Estate").click();
    cy.get(".MuiListItemText-root .MuiListItemText-primary").eq(5).click();

    cy.get('[name="title"]').type("Monday Home");
    cy.get('[name="description"]').type(
      "Best Home to make you poor in a short time"
    );
    cy.get('[name="city"]').type("Baltimore");
    cy.get('[name="address"]').type("404 201th st");
    cy.get('[name="zipCode"]').type("21210");
    //cy.get('[[name="state"]]').click();
    cy.get('[role="button"]').eq(7).click();
    cy.get('[data-value="MD"]').click();
    //cy.get('[name="city"]').type("Baltimore");

    //cy.get('div h5').attachFile('img.jpeg');

    // cy.get('div h5').attachFile('img.jpeg', { subjectType: 'drag-n-drop' });
    cy.get("div h5").attachFile("img.jpg", { subjectType: "drag-n-drop" });
    cy.get('label [type="checkbox"]').click();
    cy.get('[name="price"]').type("1000000");
    cy.get('[name="bedrooms"]').type("3");
    cy.get('[name="bathrooms"]').type("2");
    cy.get('[name="garage"]').type("1");
    cy.get('[name="sqft"]').type("4500");
    cy.get('[name="lotSize"]').type("1");
    cy.get('[type="submit"]').click();
  });

  it("should search by keyword", () => {
    cy.visit("https://dev.delekhomes.com/");
    searchHomePositive.typePropertyName.type("Monday Home");

    searchHomePositive.clickToSearch.click();

    //searchHomePositive.errorHandle;

    // check atleasst one listing is presient
    searchHomePositive.checkOneListingPresent;

    searchHomePositive.searchItemVisible;

    searchHomePositive.clickMoreInfo.click();

    searchHomePositive.propertyRealtorVisible;

    //checking prrice

    cy.contains("Asking Price").should(
      "include.text",
      "Asking Price: $ 1,000,000"
    );
    //cy.get('.MuiGrid-grid-xs-8 .MuiGrid-container :nth-child(1)').should('include.text', 'Asking Price: $ 1,000,000');

    //checking lot size
    cy.contains(" Lot Size").should("include.text", " Lot Size: 1");

    //checking garage

    cy.contains(" Garage").should("include.text", " Garage: 1");

    //searchHomePositive.propertyRealtorVisible
  });
});
