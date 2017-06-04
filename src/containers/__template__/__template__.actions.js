import ajax from '../../ajax'

import types from '__template__.constants'

function reducerName() {
  return (dispatch) => {
    dispatch({
      type: types.ACTION_NAME_STARTED_KEY
    })

    return ajax.get('/api/about')
               .then(json => dispatch({
                 type: types.ACTION_NAME_COMPLETED_KEY,
                 payload: json
               }))
               .catch(err => dispatch({
                 type: types.ACTION_NAME_FAILED_KEY,
                 payload: err.code
               }))
  }
}

export default reducerName
