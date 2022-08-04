/// <reference types="Cypress"/>

describe('Suite Name', function (){

    it('Hobbies Check Boxes', function () {
        cy.visit("https://demo.automationtesting.in/Register.html")

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket') //check checkbox
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies') //check checkbox
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey') //check checkbox

        cy.get('#checkbox1').uncheck().should('not.be.checked')//uncheck
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])//different way of checking
    }
    )
    it('Skills Drop Down', function () {
        cy.get('#Skills').select('Android').should('have.value','Android')//select android in skills
    }
    )
    it('Languages select', function () {
        cy.get('#msdd').click()
        //cy.get('.ui-corner-all').contains('English').click()
    }
    )
    it('Country select', function () {
        cy.get('#countries').click()
        cy.get('.select2-selection').type('Ire')
        cy.get('.select2-selection').type('{enter}')
    }
    )

}
)