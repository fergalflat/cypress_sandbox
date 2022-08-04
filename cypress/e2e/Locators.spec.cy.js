/// <reference types="cypress" />
//  .get('h1') // select by tag
//  .get('.square') // select by class
//  .get('#circle') // select by id
//  .get('[shape="triangle"]'); // select by attribute
//
describe('Locating Elements', function()
{
    it('Verify types of locators', function()
        {   
            cy.visit("https://frontend.nopcommerce.com/") //open url
            cy.frameLoaded('.iframe')
            cy.iframe('.iframe')
            cy.get('#small-searchterms').type("Apple MacBook Pro 13 inch") //enter in search box
            //cy.get('#onetrust-accept-btn-handler').click
            //cy.get('.search__svg').click //click on search button
        }
    )

}
)   