export const init = () => {
    return {
        status: {
            date: new Date(),
            reputation: 0,
            karma: 0,
            happiness: 0,
            quality: 0,
            money: 0
        },
        alert: {
            message: "",
            callback: () => {}
        },
        gameWindow: {
            type: "",
            tabs: {},
            list: {}
        },
        workCompleted: 0,
    }
};