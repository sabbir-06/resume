import ApplicationFormPage from "../page/ApplicationFormPage";
import fixture from "../fixtures/amazon.json";

// Function to handle login on a different origin
export const loginOnDifferentOrigin = (emailAddress, testPassword) => {
  cy.origin(
    fixture.aurl,

    { args: { emailAddress, testPassword } },
    ({ emailAddress, testPassword }) => {
      const { ApplicationFormPage } = Cypress.require(
        "../page/ApplicationFormPage"
      );
      cy.get('[type="text"][name="email"]').type(emailAddress);
      cy.get("#sign-in-button").click();
      cy.contains("Search jobs").click();
    }
  );
};

export const applyForJobOnDifferentOrigin = (fixture) => {
  cy.origin("https://www.amazon.jobs", () => {
    const baseNumber = "240280";
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000).toString();
    const phoneNumber = baseNumber + randomFourDigits;
    cy.get('[id="search_typeahead"]').eq(1).type("sdet");
    cy.get('[id="search-button"]').click();
    cy.get("h3 a").eq(0).click();
    cy.get('[id="apply-button"]').click();
    cy.get('[id="applicant_first_name"]').type("david");
    cy.get('[id="applicant_last_name"]').type("joe");
    cy.get('[role="combobox"]').eq(0).click();
    cy.get('[id="applicant_primary_phone_number"]').type(phoneNumber);
    cy.get('[id="applicant_address_street_line1"]').type("121 ghost lane");
    cy.get('[id="applicant_address_street_line2"]').type("Hell extension");
    cy.get('[id="applicant_address_city"]').type("Baltimore");
    cy.get('[id="applicant_address_zip"]').type("21211");
    cy.get('[role="combobox"]').eq(1).click();
    cy.contains("li.select2-results__option", "United States").click();
    cy.get('[role="combobox"]').eq(2).click();
    cy.contains("li.select2-results__option", "Maryland").click();
    cy.get('[data-direct-call-identifier="contact_details"]').click();
    cy.wait(1000);
    cy.get('[id="save-and-continue-form-button"]').click();
    cy.get("#us-privacy-preferences-banner").should("be.visible");
    cy.get("#btn-accept-cookies-us").click();
    cy.get("label#ARE_YOU_WILLING_TO_RELOCATE-option-0-label").click();
    //work
    cy.get(
      'label[for="dropDownValues"] span.select2-selection.select2-selection--single'
    )
      .first()
      .should("be.visible")
      .click();
    cy.get("ul.select2-results__options")
      .should("be.visible")
      .find("li.select2-results__option")
      .contains("Chennai")
      .click();
    cy.get("body").type("{esc}");
    cy.get(
      'label[for="dropDownValues"] span.select2-selection.select2-selection--single'
    )
      .eq(1)
      .should("be.visible")
      .click();
    cy.get("ul.select2-results__options")
      .should("be.visible")
      .find("li.select2-results__option")
      .contains("Advertisement")
      .click();
    cy.get(
      'div[data-questionid="HOW_DID_YOU_HEAR_ABOUT_THIS_ROLE_ADVERTISEMENT"] select'
    ).select("INTERNET", { force: true });
    cy.get("#GENERAL_QUESTIONS_EXTERNAL_IND-autosave-indicator", {
      timeout: 15000,
    }).should("not.be.visible");
    cy.wait(500);
    cy.get("button.btn.btn-primary")
      .contains("Continue")
      .should("be.visible")
      .eq(0)
      .click();
    cy.wait(10000);
    cy.get("#WORK_HISTORY_SKILLS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    }).should("not.be.visible");
    cy.get('label span[role="textbox"]').click();
    cy.get("ul.select2-results__options")
      .should("be.visible")
      .contains("5 - 10 years")
      .click({ force: true });
    cy.get("body").type("{esc}");
    cy.wait(500);
    cy.get("#WORK_HISTORY_SKILLS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    }).should("not.be.visible");
    cy.get(
      "#PLEASE_PROVIDE_THE_NAME_OF_YOUR_CURRENT_EMPLOYER_FOLLOWED_BY_A_LIST_OF_PAST_EMPLOYERS"
    )
      .should("be.visible")
      .type("My Current Employer, Past Employer One, Past Employer Two");
    cy.wait(300);
    cy.get(
      "#PLEASE_PROVIDE_THE_NAME_OF_YOUR_CURRENT_EMPLOYER_FOLLOWED_BY_A_LIST_OF_PAST_EMPLOYERS"
    )
      .should("be.visible")
      .type("My Current Employer, Past Employer One, Past Employer Two");
    cy.get("#PLEASE_LIST_YOUR_PRIMARY_AND_SECONDARY_TECHNICAL_DOMAIN_SKILLS")
      .should("be.visible")
      .type("JavaScript, Python, Cypress");
    cy.get("#GENERAL_QUESTIONS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    }).should("not.be.visible");
    cy.get('button[class="btn btn-primary"]').eq(0).click();
    cy.wait(4000);
    cy.get("#EDUCATION_EXTERNAL_IND-autosave-indicator").should(
      "not.be.visible"
    );
    cy.get('label span[role="textbox"]').click();
    cy.get('ul li[role="option"]').eq(3).click();
    cy.get("body").type("{esc}");
    cy.get(".select2-selection").eq(1).click();
    cy.get(".select2-search__field").type("University of Baltimore");
    cy.get(".select2-results").should("be.visible");
    cy.get(".select2-results__option").first().click();
    cy.get("label#HIGHEST_IM_CURRENTLY_A_STUDENT_V2-option-1-label").click();
    cy.get("label#HIGHEST_GRADUATION_DATE_V3-option-3-label").click();
    cy.get("label#HIGHEST_DO_YOU_HAVE_RELEVANT_EXPERIENCE-option-1-label"
    ).click();
    cy.get("#EDUCATION_EXTERNAL_IND-autosave-indicator").should(
      "not.be.visible"
    );
    cy.get('div [type="button"]').eq(1).click();
    cy.wait(5000);
    ////////////////
    function selectDropdown(questionId) {
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
    }

    selectDropdown("cf0cf936-f034-24af-a27a-782c75e146b1-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("58a04f17-423f-eabd-7a57-f3409e09eb1f-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("0d8ecc9e-cd8e-1201-78fb-3f81f0e0310b-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("aaa928e6-f6ab-ebc6-c4da-fdc71585ce24-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("035924f3-d0ac-97e3-cff1-d5491baa7741-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("c25a94d5-a72b-99f5-a50a-60edea709627-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    selectDropdown("04117144-5bfd-972c-0218-893f5ddab172-AQ");
    cy.get("ul.select2-results__options").should("not.exist");
    cy.get('div [type="button"]').eq(1).click();

    //Work Eligibility

    cy.get(
      '[id="HAVE_YOU_PREVIOUSLY_APPLIED_TO_AMAZON_OR_ANY_AMAZON_SUBSIDIARY_OR_AFFILIATE-option-1-label"]'
    ).click();
    cy.get('[id="PREVIOUS_AMAZON_EMPLOYMENT-option-1-label"]').click();
    cy.get('[id="NON_COMPETITION_AGREEMENT_STATUS-option-1-label"]').click();
    cy.get('[id="REQUIRE_SPONSORSHIP_IND-option-1-label"]').click();
    cy.get('[id="GEF_EXT_GOVERNMENT_EMPLOYEE-option-0-label"]').click();
    cy.get(
      '[id="DEEMED_EXPORT_DO_YOU_CURRENTLY_RESIDE_IN-option-0-label"]'
    ).click();
    cy.get(
      '[aria-labelledby="DEEMED_EXPORT_MOST_RECENT_CITIZENSHIP-label"]'
    ).click();
    cy.get("ul.select2-results__options", { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get("ul.select2-results__options")
      .contains("United States of America")
      .click();
    cy.wait(200);
    cy.get(
      '[id="DEEMED_EXPORT_PERMANENT_RESIDENT_OTHER_COUNTRY_FIRST_V2-option-1-label"]'
    ).click();
    cy.get("#WORK_ELIGIBILITY_EXTERNAL_IND-autosave-indicator").should(
      "not.be.visible"
    );
    cy.get('div [type="button"]').eq(1).click();
  });
};

export const uploadResumeOnDifferentOrigin = () => {
  cy.origin("https://www.amazon.jobs", () => {
    cy.wait(1000);
    cy.get("#WORK_HISTORY_SKILLS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    }).should("not.be.visible");
    cy.fixture("cv.txt", "base64").then((fileContent) => {
      Cypress.require("cypress-file-upload");
      cy.get("#resume_file_input").attachFile(
        {
          fileContent,
          fileName: "cv.txt",
          mimeType: "text/plain",
          encoding: "base64",
        },
        { force: true }
      );
    });

    cy.get(
      'a[href="javascript:void(0)"][class="btn btn-primary mt-5"]'
    ).click();
  });
};

export const acknowledgeAndFinalStepsOnDifferentOrigin = () => {
  cy.origin("https://www.amazon.jobs", () => {
    cy.wait(1000);
    cy.get('div[data-questionid="ACKNOWLEDGEMENT_IND"] label').click();

    cy.wait(3000);

    cy.get('[type="button"][class="btn btn-primary"]').eq(0).click();

    cy.get('[id="DIVERSITY_GENDER-option-1-label"]').eq(0).click();

    cy.wait(1000);

    cy.get('[type="button"][class="btn btn-primary"]').eq(0).click();

    cy.get('div [id="ARE_YOU_EX_MILITARY-option-1-label"]').click();

    cy.get('[id="ARE_YOU_MEMBER_OF_RESERVE_FORCES-option-1-label"]').click();

    cy.get('[id="ARE_YOU_MILITARY_SPOUSE_NON_US-option-1-label"]').click();

    cy.get('[type="button"][class="btn btn-primary"]').eq(0).click();
  });
};
