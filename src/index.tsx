import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from "./App"
import "./style/index.css"
import routes from "./routes"
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import store from "./store"

class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            {
              routes.map((item, index) => {
                return (
                  <Route path={item.path} component={item.component} key={index}></Route>
                )
              })
            }
          </App>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)