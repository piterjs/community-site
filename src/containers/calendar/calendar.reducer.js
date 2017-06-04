import { Map } from 'immutable'

const initialState = Map({
  title: 'reducers info title',
  text: 'reducers info text',
  _data: {
    isFetching: false,
    isFailed: false
  }
})

const reducer = () => {
  return initialState
}

export default reducer
