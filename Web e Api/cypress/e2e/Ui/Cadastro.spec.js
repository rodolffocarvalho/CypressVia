/// <reference types="cypress" />
    const faker = require('faker-br')

    describe('US0002 - Funcionalidade: Cadastro', () => {

        before(() => {
            cy.visit('Cadastrar')
        });
            
        it('Deve fazer cadastro com sucesso', () => {
            cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Rodolffo Carvalho')
            cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
            cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(78080239)
            cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(78080239)
            cy.get('[data-test="register-submit"]').click()
            cy.get('[data-test="navbar-dashboard"] > .hide-sm').should('contain' , 'Dashboard')

        });
        
});