import { createStore, combineReducers } from "redux"
import setUser from "./reducers"

const reducers = combineReducers({ setUser })
export default createStore(reducers)