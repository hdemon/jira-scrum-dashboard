import * as React from 'react'
import { render } from 'react-dom'
import { Root } from './containers/Root'

render(<Root />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./containers/Root', function() {
    console.log('Accepting the updated printMe module!')
  })
}
