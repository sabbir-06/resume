class DashboardPage {
  get userRoleLabel() {
    return cy.get("a p");
  }
  get fullNameHeader() {
    return cy.get("h6");
  }
  get userIconButton() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
  get pageTitle() {
    return cy.title();
  }
}
export default new DashboardPage();
