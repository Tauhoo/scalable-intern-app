import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import {
  pagesReducer,
  registerFormReducer,
  networkReducer,
  loginFormReducer,
} from "./reducers"

const rootReducer = combineReducers({
  pagesReducer,
  registerFormReducer,
  networkReducer,
  loginFormReducer,
})
const store = createStore(rootReducer)

export default ({ children }) => <Provider store={store}>{children}</Provider>
