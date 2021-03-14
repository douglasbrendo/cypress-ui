const loctors = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },

    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        HOME: '[data-test=menu-home]',
        ACCOUNTS: '[href="/contas"]',
        MOVEMENT: '[data-test=menu-movimentacao]',
        EXTRACT: '[data-test=menu-extrato]',
        RESET: '[href="/reset"]',
        LOGOUT: '[href="/logout"]'
    },

    ACCOUNTS: {
        NAME: '[data-test=nome]',
        BTN_SAVE: '.btn',
        FN_XP_BTN_UPDATE: (name) => `//table//td[contains(., '${name}')]/..//i[@class='far fa-edit']`,
        FN_XP_BTN_REMOVE: (name) => `//table//td[contains(., '${name}')]/..//i[@class='far fa-trash-alt']`
    },

    MOVEMENT: {
        DESCRIPTION: '[data-test=descricao]',
        VALUE: '[data-test=valor]',
        INTERESTED: '[data-test=envolvido]',
        ACCOUNT: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SAVE: '.btn-primary'
    },

    EXTRACT: {
        FN_XP_BTN_UPDATE: (name) => `//span[contains(., '${name}')]/../../..//i[@class='fas fa-edit']`,
        FN_XP_BTN_REMOVE: (name) => `//span[contains(., '${name}')]/../../..//i[@class='far fa-trash-alt']`
    },

    BALANCE: {
        FN_XP_BALANCE_ACCOUNT: (name) => `//td[contains(., '${name}')]/../td[2]`
    },

    MESSAGE: '.toast-message'
}

export default loctors;