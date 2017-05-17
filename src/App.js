import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Routes from './Routes'
import store, { history } from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            {Routes}
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
