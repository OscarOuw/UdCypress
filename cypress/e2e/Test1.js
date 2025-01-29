/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

it('My First Test case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
//Parent child chaining
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').should('have.length',4)
cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()
console.log('hoi')
cy.get('@productlocator').find('.product').each(($el, index, $list) => {
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    cy.wrap($el).find('button').click()
}
})
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})



})

})