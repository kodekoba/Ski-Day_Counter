import C from './constants'
import { errors } from './store/reducers.js'

const state = [
    'user not authorized ',
    'server feed not found'
]

const action = {
    type: C.CLEAR_ERROR,
    payload: 0 //index of error to be removed
}

const nextState = errors(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    next state: ${JSON.stringify(nextState)}

`)