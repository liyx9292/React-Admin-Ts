interface IAction {
  type: String,
  [propName: string]: any;
}
const userInfo = {
  username: ""
}

function setUser(state: Object = userInfo, action: IAction) {
  switch (action.type) {
    case "SET_USERNAME":
      return { username: action.str }
    default:
      return state
  }
}

export default setUser