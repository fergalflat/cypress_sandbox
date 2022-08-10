describe('HooksDemo', function ()
    {

        before(function(){
            cy.log('********** This is Setup block **********')

        })

        after(function(){

            cy.log('********** This is Tear Down Block **********')
            
        })

        beforeEach(function(){
            cy.log('********** This is Login block **********')
        })

        afterEach(function(){
            cy.log('********** This is logout block **********')
        })

        it('searching', function()
        {
            cy.log('********** This is Searching Test **********')

        }
        )
        it('advanced searching', function()
        {
            cy.log('********** This is Advanced Searching Test **********')

        }
        )
        it('listing products', function()
        {
            cy.log('********** This is listing products **********')

        }
        )

    }
)
