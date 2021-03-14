import loc from './locators'

Cypress.Commands.add('loginApplication', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/');
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(passwd)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApplication', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})

Cypress.Commands.add('accessHomeMenu', () => {
    cy.get(loc.MENU.HOME).click()
})

Cypress.Commands.add('accessAccountsMenu', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()
})

Cypress.Commands.add('accessMovementMenu', () => {
    cy.get(loc.MENU.MOVEMENT).click()
})

Cypress.Commands.add('accessExtractMenu', () => {
    cy.get(loc.MENU.EXTRACT).click()
})

Cypress.Commands.add('createAcount', (conta) => {
    cy.get(loc.ACCOUNTS.NAME).type(conta)
    cy.get(loc.ACCOUNTS.BTN_SAVE).click()
})

Cypress.Commands.add('updateAcount', (account, accountUpdate) => {
    cy.xpath(loc.ACCOUNTS.FN_XP_BTN_UPDATE(account)).click()
    cy.get(loc.ACCOUNTS.NAME)
        .clear()
        .type(accountUpdate)
    cy.get(loc.ACCOUNTS.BTN_SAVE).click()
})

Cypress.Commands.add('removeAcount', (account) => {
    cy.xpath(loc.ACCOUNTS.FN_XP_BTN_REMOVE(account)).click()
})

Cypress.Commands.add('createMovement', (desc, vlr, intr, account) => {
    cy.get(loc.MOVEMENT.DESCRIPTION).type(desc)
    cy.get(loc.MOVEMENT.VALUE).type(vlr)
    cy.get(loc.MOVEMENT.INTERESTED).type(intr)
    cy.get(loc.MOVEMENT.ACCOUNT).select(account)
    cy.get(loc.MOVEMENT.STATUS).click()
    cy.get(loc.MOVEMENT.BTN_SAVE).click()
})

Cypress.Commands.add('updateMovement', (mov, desc, vlr, intr) => {
    cy.xpath(loc.EXTRACT.FN_XP_BTN_UPDATE(mov)).click()
    cy.get(loc.MOVEMENT.DESCRIPTION)
        .clear()
        .type(desc)
    cy.get(loc.MOVEMENT.VALUE)
        .clear()
        .type(vlr)
    cy.get(loc.MOVEMENT.INTERESTED)
        .clear()
        .type(intr)
    cy.get(loc.MOVEMENT.BTN_SAVE).click()
})

Cypress.Commands.add('removeMovement', (desc) => {
    cy.xpath(loc.EXTRACT.FN_XP_BTN_REMOVE(desc)).click()
})

Cypress.Commands.add('getBalance' ,(account) => {
    cy.xpath(loc.BALANCE.FN_XP_BALANCE_ACCOUNT(account))
})

Cypress.Commands.add('getMessage', () => {
    cy.get(loc.MESSAGE)
})

Cypress.Commands.add('waitForBrowser', () => {
    cy.window().then(win => {
        return new Cypress.Promise(resolve => win['requestIdleCallback'](resolve));
    });
})
