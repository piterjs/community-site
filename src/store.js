import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {
  calendar
} from './containers/reducers'

const history = createHistory()
const initialState = window.__initialState__ || undefined
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  /** Store data:
   * {
   *  calendar: {},
   *  routing: {}
   * }
   *
   * */
  combineReducers({
    calendar,
    routing: routerReducer
  }),
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    )
  )
)

export {
  store as default,
  history
}
