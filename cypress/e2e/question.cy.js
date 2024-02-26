

describe('given the text',()=>{

    it('extract the text ',()=>{

        cy.visit('https://google.com')
        cy.get('.uU7dJb').invoke('text').then((textName)=>{
            cy.log('Extracted Text :',textName )
            cy.get('.gLFyf').type(textName)
        })
        cy.window().then((data)=>{
            data.location.reload()
            })
    })
})