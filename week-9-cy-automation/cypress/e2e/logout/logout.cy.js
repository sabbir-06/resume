import DashboardPage from "../../page_objects/dashboard.page"
import LogoutPage from "../../page_objects/logout.page"
import user from "../../fixtures/userCredentais.json";
describe("Login", () => {
  beforeEach(() => {});

  it("Should log-in and log-out", () => {
    cy.login();
    cy.visit(user.url);

    DashboardPage.roleLbl.should("have.text", `role: ${user.role}`);

    DashboardPage.ptitle.should("eq", user.title);
    LogoutPage.ploginBtn.click();
    LogoutPage.logoutBtn.click();

    LogoutPage.varifylogout;
  });
});
