import { connect } from 'react-redux'

function Examples() {
  return <div>main</div>
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Examples)
