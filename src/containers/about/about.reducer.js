import { Map } from 'immutable'

import types from './about.constants'

const initialState = Map({
  title: 'title',
  text: 'text',
  _data: Map({
    isFetching: false,
    isFailed: false
  })
})

const aboutPageInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ABOUT_PAGE_STARTED:
      return state
        .setIn(['_data', 'isFetching'], true)
        .setIn(['_data', 'isFailed'], false)
    case types.FETCH_ABOUT_PAGE_COMPLETED:
      return state
        .merge(action.payload.data)
        .setIn(['_data', 'isFetching'], false)
        .setIn(['_data', 'isFailed'], false)
    case types.FETCH_ABOUT_PAGE_FAILED:
      return state
        .setIn(['_data', 'isFetching'], false)
        .setIn(['_data', 'isFailed'], true)
    default:
      return state
  }
}

export default aboutPageInfo
