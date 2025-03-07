class DashboardPage {
  get roleLbl() {
    return cy.get("a p");
  }
  get fullNameLbl() {
    return cy.get("h6");
  }
  get userIconBtn() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
  get ptitle() {
    return cy.title();
  }
}
export default new DashboardPage();  

