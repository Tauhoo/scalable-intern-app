import React from "react"
import { View, Text, Button } from "react-native"
import SetPageButton from "../components/SetPageButton"

export default () => {
  return (
    <View>
      <Text>index</Text>
      <SetPageButton
        renderer={(currentPage, goto) => (
          <Button onPress={() => goto("register")} title='goto register' />
        )}
      />
    </View>
  )
}
