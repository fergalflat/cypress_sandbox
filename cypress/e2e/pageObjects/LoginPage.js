class loginPage{

    visit()
    {
        cy.visit("https://frontend.nopcommerce.com/")

    }
    fillEmail(value)
    {
        const field = cy.get('[id=Email]')
        field.clear()
        field.type()
        return this
    }
    fillPassword(value)
    {
        const field = cy.get('[id=Password]')
        field.clear()
        field.type()
        return this
    }
    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()
    }
}
    export default loginPage

