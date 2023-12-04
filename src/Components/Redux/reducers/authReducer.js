
let initialState = {
    name: '',
    isLoggedIn: false
}

const authReducer = (state=initialState, action) => {
    if(action.type==='LOGIN') {
        state = {
            name: action.payload,
            isLoggedIn: true
        }
    } else if(action.type==='LOGOUT') {
        state = {
            name: '',
            isLoggedIn: false
        }
    }
    
    return state;
}

export default authReducer;