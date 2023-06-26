/// <reference types="Cypress" />
import users from '../fixtures/multipleUser.json'
describe('verify the contact us form', function () {

    let obj = {
        firstName: "chinmay",
        lastName: "deshpande",
        email: "chinmaydeshpande010@gmail.com",
        message: "I am learning js"
    }
    

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
        cy.fixture('multipleUser').then(function (users) {
            this.users = users
        })


    })

    it.skip('verify the contact us form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("chinmay")
        cy.get('input[name="last_name"]').type("deshpande")
        cy.get('input[name="email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.skip('verify the contact us form - Object', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it.skip('verify the contact us form - Object', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.skip('verify the contact us form - for testcase fixture', function () {
        cy.fixture('example').then(function (data) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


    it.skip('verify the contact us form - before', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.firstName)
        cy.get('input[name="last_name"]').type(this.data.lastName)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify the contact us form - multiuser incorrect way', function () {
        cy.log(this.users)
        this.users.forEach(function (el) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })

    })

    users.forEach(function (el, index) {
        it(`running with test data ${index + 1}`, function () {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })














})