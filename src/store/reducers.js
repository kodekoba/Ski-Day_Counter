import C from '../constants'
import { combineReducers } from 'redux'

export const goal = (state=10, action) =>  // no braces
    (action.type === C.SET_GOAL) ? parseInt(action.payload) : state // efficient ternary statement


export const skiDay = (state=null, action) =>
    (action.type === C.ADD_DAY) ? action.payload : state

export const errors = (state=[], action) => {

    switch(action.type) {
        case C.ADD_ERROR :
            return [
                ...state, 
                action.payload
            ]
        
        case C.CLEAR_ERROR :
            return state.filter((message, i) => i !== action.payload)

        default:
            return state
    }

}

export const allSkiDays = (state=[], action) => {

    switch(action.type) {

        case C.ADD_DAY :
            const hasDate = state.some(skiDay => skiDay.date === action.payload.date)

            return (hasDate) ? // ternary to prevent same day entries
                state : // if true, does not add new entry
            [           // otherwise adds new ski day
                ...state,
                skiDay(null, action)
            ].sort((a,b) => new Date(b.date) - new Date(a.date))

        case C.REMOVE_DAY :
            return state.filter(skiDay => skiDay.date !== action.payload)

        default:
            return state
    }
}

export const fetching = (state=false, action) => {
    
    switch(action.type) {

        case C.FETCH_RESORT_NAMES :
            return true

        case C.CANCEL_FETCHING :
            return false

        case C.CHANGE_SUGGESTIONS :
            return false

        default:
            return state
    }
}

export const suggestions = (state=[], action) => {

    switch(action.type) {

        case C.CLEAR_SUGGESTIONS :
            return []

        case C.CHANGE_SUGGESTIONS : 
            return action.payload

        default :
            return state
    }
}

export default combineReducers({    // mirrors out initialState.json
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
})