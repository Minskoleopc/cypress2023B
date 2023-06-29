/// <reference types="Cypress" />

describe('validate get , post and update comment',function(){

    it('verify the get comment functionality',function(){
        // incorrect way , we need to wait for api response
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium ')
        

    })


    it('verify the get comment functionality',function(){

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium ')
        

    })


    it.only('verify the get comment functionality',function(){

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({request,response}){
            expect(response.statusCode).to.eq(200)
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text',response.body.body)
        })
      
        

    })










})