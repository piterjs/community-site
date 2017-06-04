import { combineReducers } from 'redux-immutable'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { Map } from 'immutable'
import {
  routerMiddleware
} from 'react-router-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import reducers from './containers/reducers'

let history = createHistory()

const initialState = Map()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ ...reducers }),
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    )
  )
)

export {
  store as default,
  history
}
