

describe('check login button API', ()=>{

    it('Login Hit API',()=>{
    //    /admin/user/getUserDetails

     
        cy.intercept('POST',"/admin/auth/login").as('loginRequest')

        cy.visit('https://riskmatic.drorapp.com')

        // cy.get('input[name="email"]').type('archanaa.parashar@maxlifeinsurance.com')
        // cy.get('input[name="password"]').type('admin1234')
        // cy.get('button[type="submit"]').click()
        cy.loginKey()
        

        cy.wait('@loginRequest',{ timeout : 15000}).then((interception)=>{
            expect(interception.response.status).to.equal(200)

            cy.log('Request Body:' , interception.response.body)
        })

    })
})