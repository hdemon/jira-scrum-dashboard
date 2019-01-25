import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

const loggerMiddleware = createLogger()

export const history = createBrowserHistory()

export default function configureStore(preloadedState?: any) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
