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
    router: routerReducer
  }),
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
