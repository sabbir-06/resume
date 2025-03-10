class LogOut {
  get profileLoginButton() {
    return cy.get('[type="button"]').eq(0);
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
  get logoutConfirmationText() {
    return cy.get("div h4")
  }
}
export default new LogOut();