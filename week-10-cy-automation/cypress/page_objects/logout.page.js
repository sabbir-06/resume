class logout {
  get ploginBtn() {
    return cy.get('[type="button"]').eq(0);
  }

  get logoutBtn() {
    return cy.contains("Logout");
  }

  get varifylogout() {
    return cy.get("div h4").should("have.text", "Sign in to Delek Homes");
  }
}

export default new logout();


