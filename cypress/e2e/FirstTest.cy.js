describe('MyTestSuite', function()
{
    it('Verify title of the page - positive', function()
    {
      cy.visit('https://frontend.nopcommerce.com/')
      cy.title().should('eq', 'nopCommerce demo store')
    })   
    it('Verify title of the page - negative', function()
    {
      cy.visit('https://frontend.nopcommerce.com/')
      cy.title().should('eq', 'nopCommerce store')
    })   

})