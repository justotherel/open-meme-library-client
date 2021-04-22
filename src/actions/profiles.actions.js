import * as api from 'api'
import {FETCH_PROFILE} from 'constants/actionTypes'

export const getProfile = (username) => async (dispatch) =>  {
    try {
        const {data} = await api.fetchProfile(username)
        dispatch({type: FETCH_PROFILE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const editProfile = (username, formData) => async  (dispatch) => {
    try {
        const {data} = await api.editProfile(username, formData)
        dispatch({type: FETCH_PROFILE, payload: data})
    } catch (error) {
        console.log(error)
    }
}