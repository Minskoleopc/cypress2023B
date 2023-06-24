//4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9

// createUser 
// update same user 
// delete same user


describe('verify e2e flow', function () {

    it('verify the create updat and deleteuser', function () {
        let tokenV = `4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
        let id = null;
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${tokenV}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.${Math.floor(Math.random() * 100000)}ramakrish122na@ce.com`,
                status: "active"
            }

        }).then(function (response) {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            id = response.body.id
            return id
        })
            .then(function (id) {
                cy.request({
                    method: "PATCH",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${tokenV}`
                    },
                    body: {
                        name: "Tenali Ramakrishna",
                        email: `tenali.${Math.floor(Math.random() * 100000)}ramakrish122na@ce.com`,
                        status: "active"
                    }

                }).then(function (response) {
                    expect(response.status).to.eq(200)
                })
                    .then(function () {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                Authorization: `Bearer ${tokenV}`
                            }

                        }).then(function (response) {
                            expect(response.status).to.eq(204)

                        })


                    })








            })


    })





})





