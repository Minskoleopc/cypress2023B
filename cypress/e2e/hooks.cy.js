/// <reference types="Cypress" />

describe('hooks in cypress', function () {

    before(function () {
        cy.log('I will run first')
    })
    beforeEach(function () {
        cy.log(' i will before each testcase')
    })

    afterEach(function () {
        cy.log('I will run after each testcase')
    })

    it('Testcase one', function () {
        cy.log('Testcase one')
    })
    it('Testcase two', function () {
        cy.log('Testcase two')
    })

    after(function () {
        cy.log('i will run last')
    })














})