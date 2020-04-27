import React from "react"
import { StyleSheet } from "react-native"
import Card from "./Card"
import Text from "./Text"
import TextInput from "./TextInput"

export default () => {
  return (
    <Card>
      <Text>ice</Text>
      <TextInput
        placeholder='username'
        onChange={(val) => console.log(val)}
      ></TextInput>
      <TextInput placeholder='password' password></TextInput>
    </Card>
  )
}

const styles = StyleSheet.create({})
