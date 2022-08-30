/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    before(() => {
        cy.visit('Login')

    });

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
    cy.get('input[type="email"]').type('rodolfdo201632@gmail.com')
    cy.get('input[type="password"').type('78080239')
    cy.get('input[type="submit"]').click()
    cy.get('[data-test="alert"]').contains("Credenciais inválidas")
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"').clear()

    });
   
    it('Deve fazer login com sucesso', () => {

        cy.reload()
        cy.login('rodolfdo2016@gmail.com', '78080239')
        cy.get('[data-test="dashboard-welcome"]').should('contain' , 'Bem-vindo')
        cy.get('[data-test="dashboard-createProfile"]').click()
    
    });
    
    it('Cadastro de usuario', () => {
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-3"]').click()
        cy.get('.large').should('contain' , 'Crie Seu Perfil' ) 
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Invillia')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://invillia.com')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('R. Padre Duarte, 151 - Cobertura, Araraquara - SP, 14800-360')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('robot framework, Jira, HLM Quality Center, Gestão de equipes, testes exploratórios, planejamento de risco.')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('@rodolffocarvalho')
        cy.get('[rows="1"]').type('7 anos na área de qualidade, com experiências como gestor, QA, Líder técnico, Team leader.')
        cy.get('[data-test="profile-submit"]').click()
       
    });

    });

