import Counter from "../../src/components/Counter"

describe('Checks', () => {
  beforeEach(()=>{
    cy.mount(<Counter/>)
  })
  it('testing', () => {
    cy.get('[data-cy="click"]').click()
    cy.get('span').should('have.text', '10000')
  })
})