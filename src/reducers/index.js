import { combineReducers } from 'redux'

import posts from './posts.reducers'
import auth from './auth.reducers'
import errorReducer from './error.reducers'

export const reducers = combineReducers({
    posts,
    auth,
    errorReducer,
})
