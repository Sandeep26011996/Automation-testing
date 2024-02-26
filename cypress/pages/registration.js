export class registration {

    weblocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }
    
    openURL() {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }
    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(Email){
        cy.get(this.weblocators.email).type(Email)
    }
    enterTelephone(PhoneNo){
        cy.get(this.weblocators.telephone).type(PhoneNo)
    }
    enterTelephone(PhoneNo){
        cy.get(this.weblocators.telephone).type(PhoneNo)
    }
    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckBox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }


}