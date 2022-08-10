describe('CustomSuite', function ()
{
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Login Test', function()
    {
        cy.login('username', 'password')//valid
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('username', 'passwordjksdlfj')//invalid
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')

    }
    )
    it('Add Customer', function()
    {
        cy.login('username', 'password')
        

    }
    )
    it('Edit Customer', function()
    {
        cy.login('username', 'password')
        

    }
    )

})