/// <reference types="Cypress" />

describe('verify the login functionality with sauce demo', function () {

    let credentials = {
        username: "Admin",
        password: "admin123"
    }


    before(function () {
        cy.fixture('credentials').then(function (data) {
            this.data = data
        })
    })

    // it('verify login functionality', function () {
    //     cy.visit('https://www.saucedemo.com/')
    //     cy.get('#user-name').type('standard_user')
    //     cy.get('#password').type('secret_sauce"')
    //     cy.get('#login-button').click()
    //     cy.get('.app_logo').should('be.visible')
    // })


    it('verify login functionality', function () {
        // cy.log(this.data.username)
        // cy.log(this.data.username)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name ="username"]').type(credentials.username)
        cy.get('input[name ="password"]').type(credentials.password)
        cy.get('button[type="submit"]').click()

    })

    it('verify the login with fixture for each testcase', function () {
        // cy.log(this.data.username)
        // cy.log(this.data.username)
        cy.fixture('credentials')
            .then(function (data) {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('input[name ="username"]').type(data.username)
                cy.get('input[name ="password"]').type(data.password)
                cy.get('button[type="submit"]').click()

            })
    })

    it.only('verify the login with fixture for each testcase', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name ="username"]').type(this.data.username)
        cy.get('input[name ="password"]').type(this.data.password)
        cy.get('button[type="submit"]').click()

    })






})