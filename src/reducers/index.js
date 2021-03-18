import {combineReducers} from 'redux'

import posts from './posts.reducers'
import auth from './auth.reducers'

export const reducers = combineReducers({
    posts,
    auth
})  