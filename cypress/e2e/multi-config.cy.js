/// <reference types="cypress" />

describe('example to-do app', () => {

  it('echoes out values from config', () => {
    cy.log((`baseConfigValue: ${Cypress.env('baseConfigValue')}`))
    cy.log((`envSpecificValue: ${Cypress.env('envSpecificValue')}`))
  })
})
