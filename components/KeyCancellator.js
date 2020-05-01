import React from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"

export default ({ children }) => (
  <TouchableWithoutFeedback onPressOut={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
