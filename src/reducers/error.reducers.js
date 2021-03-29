import { HIDE_ERROR } from 'constants/actionTypes'

const initState = {
    error: null,
    isOpen: false,
}

function errorReducer(state = initState, action) {
    const { error } = action

    if (error) {
        return {
            error: error,
            isOpen: true,
        }
    } else if (action.type === HIDE_ERROR) {
        return {
            error: null,
            isOpen: false,
        }
    }

    return state
}

export default errorReducer
