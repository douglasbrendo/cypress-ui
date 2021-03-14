/// <reference types="cypress" />

before(() => {
    cy.loginApplication('a@a', 'a')
    cy.resetApplication()
})

describe('Should test the home menu', () => {
    it('Should get account with positive balance', () => {
        cy.accessHomeMenu()
        cy.getBalance('Conta para saldo')
            .should('contain', '534')
    })

    it('Should get account with negative balance', () => {
        cy.accessHomeMenu()
        cy.getBalance('Conta para extrato')
            .should('contain', '220')
    })
})

describe('Should test the accounts menu', () => {
    it('Should create an account', () => {
        cy.accessAccountsMenu()
        cy.createAcount('Account test')
        cy.getMessage()
            .should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.accessAccountsMenu()
        cy.updateAcount('Conta para alterar', 'Account update')
        cy.getMessage()
            .should('contain', 'Conta atualizada com sucesso')
    })

    it('Should not create an account with same name', () => {
        cy.accessAccountsMenu()
        cy.createAcount('Conta mesmo nome')
        cy.getMessage()
            .should('contain', 'Request failed with status code 400')
    })
    
    it('Should remove an account', () => {
        cy.accessAccountsMenu()
        cy.removeAcount('Conta mesmo nome')
        cy.getMessage()
            .should('contain', 'Conta excluída com sucesso')
    })
})

    describe('Should test the movement menu', () => {
    it('Should create a movement', () => {
        cy.accessMovementMenu()
        cy.createMovement('Description test', '300', 'Levi', 'Conta para movimentacoes')
        cy.getMessage()
            .should('contain', 'Movimentação inserida com sucesso')
    })
})

    describe('Should test the extract menu', () => {
    it('Should update a movement', () => {
        cy.accessExtractMenu()
        cy.updateMovement('Movimentacao de conta', 'Desc update', '400', 'Eren')
        cy.getMessage()
            .should('contain', 'Movimentação alterada com sucesso')
    })

    it('Should remove a movement', () => {
        cy.accessExtractMenu()
        cy.removeMovement('Movimentacao para exclusao')
        cy.getMessage()
            .should('contain', 'Movimentação removida com sucesso')
    })
})