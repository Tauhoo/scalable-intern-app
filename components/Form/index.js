import React from "react"
import { StyleSheet } from "react-native"
import Card from "../Card"
import Text from "../Text"
import TextInput from "../TextInput"
import { nameValidator } from "./validator"
import DateInput from "../DateInput"
import OptionInput from "../OptionInput"
import { careers } from "../../config/form"

export default () => {
  return (
    <Card>
      <Text style={styles.topic}>Register</Text>
      <TextInput
        placeholder='firstname'
        onChange={(val) => console.log(val)}
        containerStyle={styles.textInput}
        checker={nameValidator("firstname")}
      ></TextInput>
      <TextInput
        placeholder='lastname'
        onChange={(val) => console.log(val)}
        containerStyle={styles.textInput}
        checker={nameValidator("lastname")}
      ></TextInput>
      <DateInput
        containerStyle={styles.textInput}
        onChange={(val) => console.log(val)}
      ></DateInput>
      <OptionInput
        options={careers}
        style={styles.textInput}
        onChange={(val) => console.log(val)}
      ></OptionInput>
    </Card>
  )
}

const styles = StyleSheet.create({
  topic: {
    marginVertical: 10,
  },
  textInput: {
    marginVertical: 5,
  },
})
