class Logout {
  get ploginBtn() {
    return cy.get('[type="button"]').eq(0);
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
  get varifylogout() {
    return cy.get("div h4")
  }
}
export default new Logout();
