/// <reference types="Cypress" />


describe('verify the date picker',function(){

    // number, boolean , string , array , object , htmlElement
    // map() , set()

    it('verify the functionality of datepicker',function(){

         let date  = new Date()
         let year = date.getFullYear()
         let month = date.getMonth()
         let date2 = date.getDate()
         let lmonth  = date.toLocaleString('default',{month:"long"})
         let smonth  = date.toLocaleString('default',{month:"short"})

         cy.log(year)
         cy.log(month)
         cy.log(date2)
         cy.log(lmonth)
         cy.log(smonth)


         let date400  = new Date()
         date400.setDate(date400.getDate()+400)
         let year2 = date400.getFullYear()
         let month2 = date400.getMonth()
         let date22 = date400.getDate()
         let lmonth2 = date400.toLocaleString('default',{month:"long"})
         let smonth2 = date400.toLocaleString('default',{month:"short"})

         cy.log(year2)
         cy.log(month2)
         cy.log(date22)
         cy.log(lmonth2)
         cy.log(smonth2)

         cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
         cy.get('#datepicker').click()

         function selectMonthAndDate(){
            cy.get('.datepicker-switch').first().then(function(el){
                cy.log(el.text())
                if(!el.text().includes(year2)){
                    cy.get('.next').first().click()
                    selectMonthAndDate()
                }
            })

            cy.get('.datepicker-switch').first().then(function(el){
                cy.log(el.text())
                if(!el.text().includes(lmonth2)){
                    cy.get('.next').first().click()
                    selectMonthAndDate()
                }
            })
   
         }
         function selectDate(){
            cy.contains(date22).click()
         }

         selectMonthAndDate()
         selectDate()
         
    })

})
