/// <reference types="Cypress" />

describe('My Third Test Suite', function()
{

it('My Third Test case', function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
})
//window:confirm
cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
    })

})
})