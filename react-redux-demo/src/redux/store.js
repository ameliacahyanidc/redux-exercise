import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducers'
import rootReducer from './rootReducers'

const store = createStore(cakeReducer)

export default store