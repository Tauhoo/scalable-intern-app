import React from "react"
import { View, Text, Button } from "react-native"
import setupLink from "../libs/setupLink"

const Butt = setupLink(({ currentPage, goto, title }) => (
  <Button onPress={() => goto("register")} title={title} />
))

export default () => {
  return (
    <View>
      <Text>index</Text>
      <Butt title='ice'></Butt>
    </View>
  )
}
