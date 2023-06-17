describe('verfify the api', function () {

    it('verify the get request', function () {
        cy.request('GET', "https://reqres.in/api/users?page=2")
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
            })
    })


    it('verify the get request', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: { page: 2 }
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
                expect(response.body.data[0]).to.have.property('id', 7)
                response.body.data.forEach(el => {
                    expect(el).to.have.property('first_name')
                    expect(el).to.have.property('last_name')
                    expect(el).to.have.property('id')
                    expect(el).to.have.property('email')
                    expect(el).to.have.property('avatar')
                });
            })
    })

    it.only('verify the post request', function () {

        let payload = {
            name: "chinmay",
            job: "tester"
        }
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: payload
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)

            // {
            //     "name": "morpheus",
            //     "job": "leader",
            //     "id": "652",
            //     "createdAt": "2023-06-17T14:06:37.256Z"
            // }
            expect(response.body).to.have.keys(["name", 'job', 'id', 'createdAt'])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)

        })

    })
    it('verify the update request', function () {

        // reponse


    })
    it('verify the update request', function () {

        // status

    })


})