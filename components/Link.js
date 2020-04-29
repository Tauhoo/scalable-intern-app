import React from "react"
import setupLink from "../libs/setupLink"
import { TouchableWithoutFeedback, View } from "react-native"

const Link = ({ children, goto, src }) => (
  <TouchableWithoutFeedback onPress={() => goto(src)}>
    {children}
  </TouchableWithoutFeedback>
)

export default setupLink(Link)
