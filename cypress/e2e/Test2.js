/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{

it('My Second Test case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//Parent child chaining
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $list) => {
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    cy.wrap($el).find('button').click()

}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})
})