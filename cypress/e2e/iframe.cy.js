/// <reference types="Cypress" />

describe('verify the iframe in js',function(){

    it('verify functionality for iframe using javascript',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('HOME')
        cy.get('#frame').then(function(iframe){
            let bdy = iframe[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href = "index.html"]').should('have.text',"Home")

        })
    })


    it('verify functionality for iframe using jquery',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('HOME')
        cy.get('#frame').then(function(iframe){
            let bdy = iframe.contents().find('body')
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href = "index.html"]').should('have.text',"Home")
        })
        
    })


})