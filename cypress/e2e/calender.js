
describe('Calender test', () => {
    it('Verifies date selection', () => {

        const monthNumber = '6';
        const date = '15';
        const year = '2027';

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

        cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-calendar__navigation__label__labelText').click();
        cy.get('.react-calendar__navigation__label__labelText').click();
        cy.contains('button', year).click();




    })



})