import * as api from 'api'
import { AUTH, ERROR } from 'constants/actionTypes'

export const signin = (formData, history) => async (dispatch) => {
    try {
        // .data maybe ???
        const { data } = await api.signIn(formData)
        const authData = data.data
        dispatch({ type: AUTH, authData })
        window.location.reload()
        history.push('/')
    } catch (error) {
        dispatch(authError(error.response.data))
        console.log(error.response)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        const authData = data.data
        dispatch({ type: AUTH, authData })
        window.location.reload()
        history.push('/')
    } catch (error) {
        console.log(error)
        dispatch(authError(error))
    }
}

export function authSuccess(result) {
    return {
        type: AUTH,
        data: result,
        error: null,
    }
}

//Specific errors defines there
export function authError(error) {
    return {
        type: ERROR,
        data: null,
        error: error,
    }
}
