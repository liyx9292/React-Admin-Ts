import * as React from "react"
import { Switch } from "react-router-dom"

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import Navmenu from "./components/Navmenu"

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Layout className="app">
        <Header>
          <Navmenu />
        </Header>
        <Content>
          <Switch>
            {this.props.children}
          </Switch>
        </Content>
        <Footer>我是底部</Footer>
      </Layout>
    )
  }
}

export default App