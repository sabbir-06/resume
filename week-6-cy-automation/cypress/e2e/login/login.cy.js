
describe('Login', () => {
  beforeEach(() => {
    
    cy.visit('/Login')
  })

  it('Should log in with your existing account as an admin (you can use your own user with any role', () => {
    cy.get('[href="/auth/login"]').click()
    cy.get('[name="email"]').type('ska4564@gmail.com')
    cy.get('[type="password"]').type('newpas')
    cy.get('[type="submit"]').click()
    cy.get('a p').should('have.text', 'role: user')
    cy.title().should('eq', 'User: Profile | Delek Homes')
    
  })

 })
