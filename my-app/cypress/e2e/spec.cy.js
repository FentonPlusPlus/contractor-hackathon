describe('visits the main page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

// describe('it visits the board page', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/board')
//     // cy.url().should('include', '/board')
//   })
// })
// describe('it visits add contractor page', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/contract"')
//     // cy.url().should('include', '/contract')
//   })
// })