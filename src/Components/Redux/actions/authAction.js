import reduxStore from "../reduxStore"

export const loginAction = (name) => {
    reduxStore.dispatch({
        type: 'LOGIN',
        payload: name
    });
}

export const logoutAction = () => {
    reduxStore.dispatch({
        type: 'LOGOUT'
    });
}