

describe('MyTestSuite', function ()
    {
        before(function(){
            cy.fixture('example').then(function(data){
                this.data=data
            })
        })

        it('Fixtures Demo Test', function()
        {
            cy.visit("https://frontend.nopcommerce.com/") //open url

            cy.get('input[name=Email]').type(this.data.email)
            cy.get('input[name=Password]').type("this.data.password")
            cy.get('input[type=submit]').click()
            

        }
        )

    })