//5. Should not register without filling in required fields

describe("Negative Registration - Required Fields", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("Should show error messages for missing required fields", () => {
    // Submit the form without filling any fields
    cy.get('[type="submit"]').click();

    // Verify the error message for the Last Name field
    cy.get(".MuiFormHelperText-root.Mui-error").should(
      "contain",
      "Last name required"
    );
  });
});
