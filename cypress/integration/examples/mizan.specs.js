describe('visit mizan',()=>{
    it('mizan is available',()=>{
        cy.visit('https://seller.mizanmu.id/')
        cy.get('.account-login > [href="https://seller.mizanmu.id/login"]').scrollIntoView().click({force: true})
        cy.get('[type="email"]').type('ifyoga@qmail.id')
        cy.get('#pass').type('haduh')
        cy.get('.btn').should('contain','Login').click()
        cy.get('#produk_name').type('asbunayah')
        cy.wait(1000)
        cy.get('.submit-form > .radius').click()
    })
})