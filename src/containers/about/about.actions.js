import ajax from '../../ajax'

import types from 'about.constants'

function fetchAboutPageData() {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ABOUT_PAGE_STARTED
    })

    return ajax.get('/api/about')
      .then(json => dispatch({
        type: types.FETCH_ABOUT_PAGE_COMPLETED,
        payload: json
      }))
      .catch(err => dispatch({
        type: types.FETCH_ABOUT_PAGE_FAILED,
        payload: err.code
      }))
  }
}

export default fetchAboutPageData
