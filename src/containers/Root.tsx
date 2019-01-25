import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from '../configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" render={() => <AsyncApp />} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

const root = hot(module)(Root)

export { root as Root }
