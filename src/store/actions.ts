interface IAction {
  type: String,
  [propName: string]: any;
}

const SET_USERNAME:String = "SET_USERNAME"

function setUsername(str: String = ""): IAction {
  return {
    type: SET_USERNAME,
    str
  }
}

export {
  setUsername
}
