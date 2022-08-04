/// <reference types="Cypress"/>

describe('Navigation suite', function ()
    {
        it('Navigation tests', function()
        {
            cy.visit("https://frontend.nopcommerce.com/") //open url
            cy.title().should('eq', 'nopCommerce demo store')

            cy.get('ico-register').contains('reg').click()
            cy.title().should('eq', 'nopCommerce demo store')

            cy.go('back')
            cy.title().should('eq', 'nopCommerce demo store')

            cy.go('forward')
            cy.title().should('eq', 'nopCommerce demo store. Register')
            
            cy.go(-1)
            cy.title().should('eq', 'nopCommerce demo store')

            cy.go(1)
            cy.title().should('eq','nopCommerce demo store. Register')

        }
        )

    }
)
