const { FETCH_PROFILE } = require('constants/actionTypes')

const initState = {
    profile: {},
    profilePic: ''
}

const profilesReducers = (profile = initState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
             const data = action.payload.profile
             const profilePic = action.payload.profilePic

             return {
                 profile: data,
                 profilePic
             }
        default:
            return profile
    }
}

export default profilesReducers
