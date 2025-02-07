/// <reference types="Cypress" />

describe('My Fifth Test Suite', function()
{

it('My Fifth Test case', function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
cy.url().should('include','top')
})
})