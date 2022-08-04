/// <reference types="Cypress"/>

describe('UI Elements', function ()
    {
        it('Verify Inputbox & radio buttons', function()
        {
            cy.visit("https://demo.guru99.com/test/newtours/") //open url
            cy.url().should('include', 'newtours') //verify url

            cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury')
            cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury')

            cy.get('input[name=submit]').should('be.visible').click() //sign in

            cy.title().should('eq', 'Login: Mercury Tours') //title verification

            //cy.get('#Accept All').click()

            cy.get(':nth-child(2) > [width="80"] > a').click()//click flights
            cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')//visibility checked status
            
            cy.get('[name=findFlights]').should('be.visible').click() //continue button

            cy.title().should('eq','Find a Flight: Mercury Tours:')

        }
        )

    }
)
