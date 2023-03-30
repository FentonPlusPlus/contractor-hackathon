describe('visits home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('visits Candidates page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/candidates')
  })
})

describe('visits Contract Board page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/board')
    cy.get(':nth-child(1) > .btn').click()
    
  })
})