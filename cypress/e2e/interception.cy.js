

describe('API Response after Submit Button Click', () => {

    it('captures the response of an API call after clicking on submit button', () => {
        // Intercept the API call
        cy.intercept('POST', '/signup').as('submitRequest');

        // Visit the webpage
        cy.visit('https://automationexercise.com/signup');

        // Click on the submit button
        cy.get('input[type="text"]').type('Sunny')
        cy.get('input[data-qa="signup-email"]').type('sunny54455@gmail.com')
        cy.get('button[data-qa="signup-button"]').click();

        // Wait for the API call to complete and capture its response
        cy.wait('@submitRequest').then((interception) => {
            // Assertion: Check if the response is successful (status code 200)
            expect(interception.response.statusCode).to.equal(200);

            // Log the response body for further inspection
            cy.log('Response Body:', interception.response.body);
        });
    });
});
