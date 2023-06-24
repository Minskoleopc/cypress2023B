/// <reference types="Cypress" />

describe('Verify end to end call create update delete', function () {
    it('verify the post patch and delete request', function () {
        let id;
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali${Math.floor(Math.random() * 100000)}.ramakrishnaa@15ce.com`,
                status: "active"
            },
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }

        })
            .then(function (response) {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                id = response.body.id

            })
            .then(function () {
                cy.request({
                    method: "PATCH",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    body: {
                        name: "Chinmay Deshpande",
                        email: `tenali${Math.floor(Math.random() * 100000)}.ramakrishnaa@15ce.com`,
                        status: "active"
                    },
                    headers: {
                        Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                    }

                })
                    .then(function (response) {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                    })
                    .then(function () {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                            }
                        })
                            .then(function (response) {
                                expect(response.status).to.eq(204)
                            })

                    })




            })










    })



})