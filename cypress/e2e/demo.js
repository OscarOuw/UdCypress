/// <reference types= 'Cypress'/>
/// <reference types='cypress-iframe'/>

import 'cypress-iframe'

describe('Frames test', function() {
    it('Demo example', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        // Wait for the content to load or navigate
        cy.wait(2000)  // Add wait time here (or adjust based on your needs)
        cy.iframe().find('h1[class="pricing-title"]').should('exist')

        cy.iframe().find('h1[class="pricing-title"]').should('have.length',2)

    })



})