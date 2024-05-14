import { createStore } from 'redux'

if (localStorage.getItem('user') === undefined) {
    localStorage.setItem('user', null);
}
const user = localStorage.getItem('user') || null

const userReducer = ( state = { user: user}, action ) => {
    if (action.type === 'setUser') {
        return {
            user: action.value
        }
    }

    return state
}

const store = createStore(userReducer)

export default store