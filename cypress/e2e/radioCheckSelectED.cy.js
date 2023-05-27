/// <reference types="Cypress" />


describe('verify the functionality of checkbox,radioButton,select Drop Down', function () {

    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    })


    it('verify functionality for radio button', function () {
        // basic
        //cy.get('input[value="green"]').click().should('be.checked')
        // cy.get('input[value="green"]').check().should('be.checked')
        // cy.get('input[value="blue"]').should('not.be.checked')

        cy.get('#radio-buttons').children().filter('input')
        .should('have.length',5)
        .each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    

    it.only('verify functionality for checkbox', function () {

        //checkbox-1 ---- tick  ----- click ()
        //checkbox-1 -----tick  ----- check()
        //checkbox-1 -----tick  ----- uncheck()

        // with check and uncheck method
        // cy.get('input[value = "option-3"]').should('be.checked')
        // cy.get('input[value = "option-3"]').check().should('be.checked')
        // cy.get('input[value = "option-3"]').uncheck().should('not.be.checked')

        // with click()
        // cy.get('input[value = "option-3"]').should('be.checked')
        // cy.get('input[value = "option-3"]').click().should('not.be.checked')
        // cy.get('input[value = "option-3"]').click().should('be.checked')

        //cy.get('input[value = "option-3"]').click().should('be.checked')

        //cy.get('input[type= "checkbox"]').check(['option-1','option-2','option-3','option-4']).should('to.be.checked')

        // cy.get('input[type= "checkbox"]').each(function(el){
        //     cy.wrap(el).check().should('be.checked')
        //     cy.wrap(el).uncheck().should('not.be.checked')
        // })

        // cy.get('input[type= "checkbox"]').each(function(el,index){
        //     if(index != 2){
        //         cy.wrap(el).click().should('be.checked')
        //         cy.wrap(el).click().should('not.be.checked')
        //     }
        // })




    })







})