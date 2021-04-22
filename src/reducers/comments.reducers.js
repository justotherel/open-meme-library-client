import { CREATE_COMMENT, FETCH_COMMENTS } from 'constants/actionTypes'

const initState = {
    comments: [],
    profilePics: [],
}

const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            const {comments, profilePics} = action.payload
            return {
                comments,
                profilePics,
            }
        default:
            return state
    }
}

export default commentsReducer
