import { combineReducers } from 'redux'

import posts from './posts.reducers'
import comments from './comments.reducers'
import profiles from './profiles.reducers'
import auth from './auth.reducers'
import errorReducer from './error.reducers'

export const reducers = combineReducers({
    posts,
    auth,
    comments,
    profiles,
    errorReducer,
    
})
