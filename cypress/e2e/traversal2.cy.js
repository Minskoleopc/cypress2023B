/// <reference types="Cypress" />

// What to test - test scenario
// How to test - testcases
// Suite --- testcases

describe('traversal method in cypress',function(){
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list ').children().should('have.length',11)
        cy.get('.traversal-food-list ').children().each(function(el){
            cy.log(el.text())
        })

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text',"Figs")
        cy.get('#veggie').prev().then(function(el){
            expect(el.text()).to.eq('Figs')
        })
        cy.get('#veggie').prev().invoke('text').then(function(txt){
            expect(txt).to.eq('Figs')
        })
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
        
    })


    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
        .first()
        .should('have.text',"Fruits")
        .and('have.attr','id','fruits')
        .and('have.class','list-header')
        .and('have.id','fruits')
    })

    it.only('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
        .last()
        .should('have.text',"Lentils")
      
    })

    it.only('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
        .eq(2)
        .should('have.text',"Banana")
      
    })
 
})








