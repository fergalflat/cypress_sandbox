import loginPage from /PageObjects/LoginPage

describe('Test Suite', function ()
    {
        it('Valid Login Test', function()
        {
            const lp=new loginPage
            lp.visit()
            lp.fillEmail('admin')
            lp.fillPassword('admin')
            lp.submit()

            cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        }
        )

    })