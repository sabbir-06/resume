
describe('Logout', () => {
    beforeEach(() => {
      
      cy.visit('/Logout')
    })
  
    it('Should log out', () => {
      cy.get('[href="/auth/login"]').click()
      cy.get('[name="email"]').type('ska4564@gmail.com')
      cy.get('[type="password"]').type('newpas')
      cy.get('[type="submit"]').click()
      cy.get('a p').should('have.text', 'role: user')
      cy.title().should('eq', 'User: Profile | Delek Homes')
      cy.get('button [data-testid="PersonIcon"]').click();
      cy.contains('Logout').click();
    })
  
   })
  