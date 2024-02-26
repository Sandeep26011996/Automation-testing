import { registration } from "../pages/registration"
import registerData from "../fixtures/registerData.json"

const registerObj = new registration();

function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + '@tempmail.com'
    return email
    }
    let newMails = randomEmail()
    

describe('Create a New Registraion',()=>{

    it('create a new Registration',()=>{
        cy.log(newMails)
     registerObj.openURL()
     registerObj.enterFirstName(registerData.firstName)
     registerObj.enterLastName(registerData.lastName)
     registerObj.enterEmail(newMails)
     registerObj.enterTelephone(registerData.telephone)
     registerObj.enterPassword(registerData.password)
     registerObj.selectCheckBox()
     registerObj.clickOnContinue()
     cy.contains('Your Account Has Been Created!').should('exist')
     cy.log('Congratulations! Your new account has been successfully created!')
        
    })
})



