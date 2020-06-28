import * as React from 'react'
import { connect } from "react-redux"
import { setUsername } from "../store/actions"

interface IProps {
  username: String
}
const mapStateToProps = (state: any) => {
  return {
    username: state.setUser.username
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  setUsername: (str: String) => dispatch(setUsername(str))
})

@(connect( mapStateToProps, mapDispatchToProps, ) as any)
export default class Hi extends React.Component<IProps, {}> {
  render() {
    return (
      <h1>Hi~{this.props.username}</h1>
    )
  }
}