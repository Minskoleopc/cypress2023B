/// <reference types="Cypress" />
describe('API Testing', function () {

    it('GET API to get user pagewise', function () {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
            })

    })

    it('POST API to create user', function () {
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: {
                name: "ravi",
                job: "qa"
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    })

    it('PUT API to update the user',function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"PUT",
            body:{
                name: "ravi",
                job: "qa"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })

    })

    it('DELETE API to delete the user',function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"DELETE",
           
        }).then(function(response){
            expect(response.status).to.eq(204)
        })

    })

    //https://reqres.in/

})
