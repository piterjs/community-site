import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import getContext from 'recompose/getContext'
import { connect } from 'react-redux'
import {
  fetchAboutPageData
} from './about.actions'
import {
  getAboutPageInfo
} from './about.selectors'

const AboutInfoContainer = ({title, text}) => {
  return (
    <div className="AboutInfoContainer">
      <h1 className="AboutInfoContainer__title">
        {title}
      </h1>

      <div className="AboutInfoContainer__text">
        {text}
      </div>

    </div>
  )
}

const ComposedAboutInfoContainer = compose(
  getContext({
    store: PropTypes.object
  }),
  withProps(ownerProps => {
    // TODO: get data each about page navigation
    ownerProps.store.dispatch(fetchAboutPageData())

    return ownerProps
  }),
  connect((state, props) => {
    
    return getAboutPageInfo(state)
  })
)(AboutInfoContainer)

export default ComposedAboutInfoContainer
