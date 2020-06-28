import * as React from "react"
import { Link } from "react-router-dom"

import { Menu } from 'antd';

import routes from "../routes"

class Navmenu extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      current: 'mail'
    }
  }
  handleClick = (e: any) => {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Menu onClick={ this.handleClick } selectedKeys={[ this.state.current ]} mode="horizontal" theme="dark">
        {
          routes.map((item, index) => {
            return (
            <Menu.Item key={ index }>
              <Link to={item.path}>
                { item.name }
              </Link>
            </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}

export default Navmenu