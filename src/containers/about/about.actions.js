import ajax from '../../ajax'

import types from './about.constants'

function fetchAboutPageData() {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ABOUT_PAGE_STARTED
    })

    const result = ajax.get('/about')
      .then(json => dispatch({
        type: types.FETCH_ABOUT_PAGE_COMPLETED,
        payload: json
      }))
      .catch(err => dispatch({
        type: types.FETCH_ABOUT_PAGE_FAILED,
        payload: err.code
      }))

    return result
  }
}

export {
  fetchAboutPageData
}
