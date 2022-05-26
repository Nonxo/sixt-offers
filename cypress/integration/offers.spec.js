describe('Display offers', () => {

    it('displays offers in a grid', () => {

        // Create a Promise and capture a reference to its resolve
        // function so that we can resolve it when we want to:
        let sendResponse;
        const trigger = new Promise((resolve) => {
            sendResponse = resolve;
        });

        cy.intercept('api/json_files/offers.json', (request) => {
            return trigger.then(() => {
                request.reply();
            });
        });

        cy.visit('/')

        cy.get('.flex > svg').should('be.visible').then(() => {

            sendResponse();

            cy.get('.flex > svg').should('not.exist');
            cy.get('.grid > div').should('have.length', 63)

            cy.get(':nth-child(1) > .text-center > .font-semibold').should('contain.text', 'Audi A3 Sedan')
        });

    })

})