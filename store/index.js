import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { pagesReducer, formReducer, networkReducer } from "./reducers"

const rootReducer = combineReducers({
  pagesReducer,
  formReducer,
  networkReducer,
})
const store = createStore(rootReducer)

export default ({ children }) => <Provider store={store}>{children}</Provider>
