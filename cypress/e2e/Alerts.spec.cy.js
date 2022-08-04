/// <reference types="Cypress"/>

describe('Suite Name', function (){
    it('Alerts', function () {
        cy.visit("http://mail.rediff.com")
        cy.get('.signin').click()
        cy.get('.submit').click()

        cy.on('window:alert', (str) => 
        {
            expect(str).to.equal('Please enter a valid user name')
        }
        )
    }
    )
}
)