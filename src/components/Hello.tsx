import * as React from 'react'
import { setUsername } from "../store/actions"
import { connect } from "react-redux"

import { Input } from 'antd';

interface IProps {
  username: string,
  setUsername: (str: string) => {}
}
const mapStateToProps = (state: any) => {
  return {
    username: state.setUser.username
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  setUsername: (str: string) => dispatch(setUsername(str))
})

@(connect( mapStateToProps, mapDispatchToProps, ) as any)
class Hi extends React.Component<IProps, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      inputValue: "123"
    }
  }
  clickBtn = () => {
    console.log('执行了')
    this.props.setUsername("username")
  }
  inputChange = (e: any) => {
    this.props.setUsername(e.target.value)
  }
  inputInput = (e:any) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.clickBtn}>点击我改变usernamne</button>
        <Input value={this.props.username} onChange={this.inputChange}/>
        <Input value={this.state.inputValue} onChange={this.inputInput}/>
      </div>
    )
  }
}

export default Hi