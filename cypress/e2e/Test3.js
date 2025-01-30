/// <reference types="Cypress" />

describe('My Third Test Suite', function()
{

it('My Third Test case', function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#checkBoxOption1').check().should('be.checked')


})
})