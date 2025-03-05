class ApplicationFormPage {
  visit() {
    return cy.visit("https://passport.amazon.jobs/createaccount");
  }

  // Getters for selectors
  get emailInput() {
    return cy.get('[id="usernameFormUsernameInputField"]');
  }

  get passwordInput() {
    return cy.get('[id="passwordFormNewPasswordInputField"]');
  }

  get confirmPasswordInput() {
    return cy.get('[id="passwordFormConfirmNewPasswordInputField"]');
  }

  get rSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  get verificationCodeInputField() {
    return cy.get('[id="verificationFormCodeInputField"]');
  }

  get verificatonCodeSubmitButton() {
    return cy.get('button[type="submit"]').eq(0);
  }

  get clickToBackLink() {
    return cy.get('[id="backToA2D1Link"]');
  }

  get nameEmail() {
    return cy.get('[name="email"]');
  }

  get signInButton() {
    return cy.get("#sign-in-button");
  }

  get jobSearchButton() {
    return cy.contains("Search jobs");
  }

  get jobSearchTypeHead() {
    return cy.get('[id="search_typeahead"]');
  }

  get jobsearch() {
    return cy.get('[id="search-button"]');
  }

  get pickJob() {
    return cy.get("h3 a").eq(0);
  }

  get applyButton() {
    return cy.get('[id="apply-button"]');
  }

  get applicantFisrstNameField() {
    return cy.get('[id="applicant_first_name"]');
  }

  get applicantSecondNameField() {
    return cy.get('[id="applicant_last_name"]');
  }

  get roleComboBox() {
    return cy.get('[role="combobox"]').eq(0);
  }

  get ApplicantphoneNumber() {
    return cy.get('[id="applicant_primary_phone_number"]');
  }

  get applicantAddressLineOne() {
    return cy.get('[id="applicant_address_street_line1"]');
  }

  get applicantAddressLineSecond() {
    return cy.get('[id="applicant_address_street_line2"]');
  }

  get applicantCity() {
    return cy.get('[id="applicant_address_city"]');
  }

  get applicantZipcode() {
    return cy.get('[id="applicant_address_zip"]');
  }

  get applicantRoleCombobox() {
    return cy.get('[role="combobox"]').eq(1);
  }

  get applicantCitizen() {
    return cy.contains("li.select2-results__option", "United States");
  }

  get applicantRoleComboThree() {
    return cy.get('[role="combobox"]').eq(2);
  }

  get applicantState() {
    return cy.contains("li.select2-results__option", "Maryland");
  }

  get applicantContactDetail() {
    return cy.get('[data-direct-call-identifier="contact_details"]');
  }

  get saveAndcontinueButton() {
    return cy.get('[id="save-and-continue-form-button"]');
  }

  get privacyPreferenceBanner() {
    cy.wait(5000);
    return cy.get("#us-privacy-preferences-banner");
  }

  get cookiesAceptButton() {
    return cy.get("#btn-accept-cookies-us");
  }

  get relocateRadioButton() {
    return cy.get("label#ARE_YOU_WILLING_TO_RELOCATE-option-0-label");
  }

  get locationDropDownMenu() {
    return cy
      .get(
        'label[for="dropDownValues"] span.select2-selection.select2-selection--single'
      )
      .first()
      .should("be.visible");
  }

  get SelectACity() {
    return cy
      .get("ul.select2-results__options")
      .should("be.visible")
      .find("li.select2-results__option")
      .contains("Chennai");
  }

  get typeEsc() {
    return cy.get("body");
  }

  get howYouFindUsDropDown() {
    return cy
      .get(
        'label[for="dropDownValues"] span.select2-selection.select2-selection--single'
      )
      .eq(1)
      .should("be.visible");
  }

  get selectAdvertisement() {
    return cy
      .get("ul.select2-results__options")
      .should("be.visible")
      .find("li.select2-results__option")
      .contains("Advertisement");
  }

  get hearAbouRole() {
    return cy.get(
      'div[data-questionid="HOW_DID_YOU_HEAR_ABOUT_THIS_ROLE_ADVERTISEMENT"] select'
    );
  }

  get questionAutosaveIndicator() {
    return cy.get("#GENERAL_QUESTIONS_EXTERNAL_IND-autosave-indicator", {
      timeout: 15000,
    });
  }

  get btnContinuePrimary() {
    return cy
      .get("button.btn.btn-primary")
      .contains("Continue")
      .should("be.visible")
      .eq(0);
  }

  get WorkSkillAutosaveIndicator() {
    return cy.get("#WORK_HISTORY_SKILLS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    });
  }

  get roleTextbox() {
    return cy.get('label span[role="textbox"]');
  }

  get jobExperience() {
    return cy
      .get("ul.select2-results__options")
      .should("be.visible")
      .contains("5 - 10 years");
  }

  get cPpEmployer() {
    return cy
      .get(
        "#PLEASE_PROVIDE_THE_NAME_OF_YOUR_CURRENT_EMPLOYER_FOLLOWED_BY_A_LIST_OF_PAST_EMPLOYERS"
      )
      .should("be.visible");
  }

  get skills() {
    return cy
      .get("#PLEASE_LIST_YOUR_PRIMARY_AND_SECONDARY_TECHNICAL_DOMAIN_SKILLS")
      .should("be.visible");
  }

  get gQAutosaveIndicator() {
    return cy.get("#GENERAL_QUESTIONS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    });
  }

  get submitButtonPrimary() {
    return cy.get('button[class="btn btn-primary"]');
  }

  get EducationAutosaveIndicator() {
    return cy.get("#EDUCATION_EXTERNAL_IND-autosave-indicator");
  }

  get educationLevelTextbox() {
    return cy.get('label span[role="textbox"]');
  }

  get selectEducationLevel() {
    return cy.get('ul li[role="option"]').eq(3);
  }

  get institutionNameMenu() {
    return cy.get(".select2-selection").eq(1);
  }

  get selectInstitution() {
    return cy.get(".select2-search__field");
  }

  get propertyVisibleone() {
    return cy.get(".select2-results");
  }

  get firstMarching() {
    return cy.get(".select2-results__option").first();
  }

  get currentlyStudentRadio() {
    return cy.get("label#HIGHEST_IM_CURRENTLY_A_STUDENT_V2-option-1-label");
  }

  get graduationDateRadio() {
    return cy.get("label#HIGHEST_GRADUATION_DATE_V3-option-3-label");
  }

  get relevantExperienceRadio() {
    return cy.get(
      "label#HIGHEST_DO_YOU_HAVE_RELEVANT_EXPERIENCE-option-1-label"
    );
  }

  get continueButtonEducation() {
    return cy.get('div [type="button"]').eq(1);
  }

  get jobSpcecificAutoSave() {
    return cy.get("#908cf4ee-67b2-4851-b44f-1d01a54a21f4-autosave-indicator");
  }

  get dropDown() {
    return cy.get("ul.select2-results__options");
  }

  get jobSpeceficContinueBtton() {
    return cy.get('div [type="button"]').eq(1);
  }

  get previousApplication() {
    return cy.get(
      '[id="HAVE_YOU_PREVIOUSLY_APPLIED_TO_AMAZON_OR_ANY_AMAZON_SUBSIDIARY_OR_AFFILIATE-option-1-label"]'
    );
  }

  get previousAmazonEmployment() {
    return cy.get('[id="PREVIOUS_AMAZON_EMPLOYMENT-option-1-label"]');
  }

  get nonCompetitionAgr() {
    return cy.get('[id="NON_COMPETITION_AGREEMENT_STATUS-option-1-label"]');
  }

  get immiSupport() {
    return cy.get('[id="REQUIRE_SPONSORSHIP_IND-option-1-label"]');
  }

  get exGovtEmplyment() {
    return cy.get('[id="GEF_EXT_GOVERNMENT_EMPLOYEE-option-0-label"]');
  }

  get SancCounry() {
    return cy.get(
      '[id="DEEMED_EXPORT_DO_YOU_CURRENTLY_RESIDE_IN-option-0-label"]'
    );
  }

  get currentResident() {
    return cy.get(
      '[aria-labelledby="DEEMED_EXPORT_MOST_RECENT_CITIZENSHIP-label"]'
    );
  }

  get permanentResidence() {
    return cy.get(
      '[id="DEEMED_EXPORT_PERMANENT_RESIDENT_OTHER_COUNTRY_FIRST_V2-option-1-label"]'
    );
  }

  get workAutoIndicator() {
    return cy.get("#WORK_ELIGIBILITY_EXTERNAL_IND-autosave-indicator");
  }

  get workContinueButton() {
    return cy.get('div [type="button"]').eq(1);
  }

  get workHistoryAutoIndicator() {
    return cy.get("#WORK_HISTORY_SKILLS_EXTERNAL_IND-autosave-indicator", {
      timeout: 10000,
    });
  }

  get resumeContinueButton() {
    return cy.get('a[href="javascript:void(0)"][class="btn btn-primary mt-5"]');
  }

  get acknowledgementRadio() {
    return cy.get('div[data-questionid="ACKNOWLEDGEMENT_IND"] label');
  }

  get acknowledgementContinueButton() {
    return cy.get('[type="button"][class="btn btn-primary"]').eq(0);
  }

  get genderRadioButton() {
    return cy.get('[id="DIVERSITY_GENDER-option-1-label"]').eq(0);
  }

  get selfIdentificationContinue() {
    return cy.get('[type="button"][class="btn btn-primary"]').eq(0);
  }

  get xMilitary() {
    return cy.get('div [id="ARE_YOU_EX_MILITARY-option-1-label"]');
  }

  get memberReserveForce() {
    return cy.get('[id="ARE_YOU_MEMBER_OF_RESERVE_FORCES-option-1-label"]');
  }

  get militarySpouse() {
    return cy.get('[id="ARE_YOU_MILITARY_SPOUSE_NON_US-option-1-label"]');
  }

  get voluntarySelfIdContinueButton() {
    return cy.get('[type="button"][class="btn btn-primary"]').eq(0);
  }
}

export default new ApplicationFormPage();
