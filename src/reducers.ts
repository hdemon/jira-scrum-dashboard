import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actions'

const selectedSubreddit = (state = 'reactjs', action: any) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action: any
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

const postsBySubreddit = (state: any = {}, action: any) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action),
      })
    default:
      return state
  }
}

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    postsBySubreddit,
    selectedSubreddit,
  })

export default createRootReducer
