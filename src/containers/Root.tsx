import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}

const root = hot(module)(Root)

export { root as Root }
