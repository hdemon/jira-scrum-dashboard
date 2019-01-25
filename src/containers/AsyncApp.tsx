import * as React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

export interface AsyncAppProps {
  dispatch: any
}

class AsyncApp extends React.Component<AsyncAppProps, {}> {
  render() {
    return (
      <div>
        <List list={[1, 2, 3]} />
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(AsyncApp)
