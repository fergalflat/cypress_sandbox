/// <reference types="Cypress"/>

//const { divide, nth } = require("cypress/types/lodash")

describe('MyTestSuite', function ()
    {
        it('Table spec', function()
        {
            cy.visit("https://testautomationpractice.blogspot.com/") //open url]

            //1) check the value in table 

            cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.be.visible')

            //check value in specific row and column

            cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

            cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index,$list) => {

                const text = $e.text()
                if(text.includes("Amod"))
                {
                    cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                    {
                        const bookName = bname.text()
                        expect(bookName).to.equal("Master In Java")
                    })
                }
            }
        
        )

    }
)
    })
