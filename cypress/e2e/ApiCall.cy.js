
// import payload from '../config/payload.json'

function randomEmail (){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@tempmail.com"
    return email
}


describe('API e2e testing', ()=>{



    it('check responses',()=>{
      cy.request({
        method:'GET',
        url : 'https://gorest.co.in/public/v2/users',
        headers:{
            Authorization: "Bearer c266f7d620475939ac367a7e6416380fd4b307e6119ad0f5941cf78f5c2169e9"
        }
        }).then((response)=>{
          cy.log(JSON.stringify(response))
          expect(response.status).to.eq(200)
        })
    })

    it('Create a User By Post Request', ()=>{
       
        let newEmail = randomEmail()
        cy.log("********New EMAIL GENERATED :" + newEmail)
        let payload = {
            "name": "Rajesh Kapoor",
            "email": newEmail,
            "gender": "male",
            "status": "active"
        }

        cy.request({
            method:'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: "Bearer c266f7d620475939ac367a7e6416380fd4b307e6119ad0f5941cf78f5c2169e9"
            },
            body : payload
            }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body).has.property("name", "Rajesh Kapoor")
                
                let userID = response.body.id
                cy.getAPI('https://gorest.co.in/public/v2/users/' + userID).then((response)=>{
                    expect(response.status).to.be.equal(200)
            })

            cy.request({
                method:'PUT',
                url : 'https://gorest.co.in/public/v2/users/' + userID,
                headers:{
                    Authorization: "Bearer c266f7d620475939ac367a7e6416380fd4b307e6119ad0f5941cf78f5c2169e9"
                },
                body : payload
                }).then((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.body).has.property("name", "Rajesh Kapoor")
                })
    })
})
   


    

})
        



