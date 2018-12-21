import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/main'

interface Props {
  dispatch: string
}

class Index extends React.Component<Props, {}> {
  public props: Props
  private timer: any

  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <Examples />
  }
}

export default connect()(Index)
