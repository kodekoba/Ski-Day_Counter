import C from '../constants'

export const goal = (state=10, action) => {
    (action.type === C.SET_GOAL) ? parseInt(action.payload) : state // efficient ternary statement
}

export const skiDay = (state=null, action) => {
    (action.type === C.ADD_DAY) ? parseInt(action.payload) : state
}