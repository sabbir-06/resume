import dashboardPage from "../../page_objects/dashboard.page"
import logoutPage from "../../page_objects/logout.page"
import user from "../../fixtures/userCredentais.json";
describe("Login", () => {
  beforeEach(() => {});

  it("Should log-in and log-out", () => {
    cy.login();
    cy.visit("/dashboard/user/profile");

    dashboardPage.roleLbl.should("have.text", `role: ${user.realtor.role}`);

    dashboardPage.ptitle.should("eq", user.realtor.title);
    logoutPage.ploginBtn.click();
    logoutPage.logoutBtn.click();

    logoutPage.varifylogout.should("have.text", "Sign in to Delek Homes");
  });
});
