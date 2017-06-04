import { Map } from 'immutable'

const initialState = Map({
  title: 'reducer\s info title',
  text: 'reducer\s info text',
  _data: {
    isFetching: false,
    isFailed: false
  }
})

const reducer = () => {
  return initialState
}

export default reducer
