import React from "react"
import { StyleSheet } from "react-native"
import Card from "../Card"
import Text from "../Text"
import Button from "../Button"
import Link from "../Link"
import TextInput from "../TextInput"

export default () => {
  return (
    <Card>
      <Text style={styles.push}>Login</Text>
      <TextInput
        placeholder='email'
        containerStyle={styles.push}
        value={{ isValid: true, value: "", notificate: "" }}
      ></TextInput>
      <TextInput
        placeholder='password'
        containerStyle={styles.push}
        value={{ isValid: true, value: "", notificate: "" }}
      ></TextInput>
      <Link src='index'>
        <Button title='Cancel' />
      </Link>
    </Card>
  )
}

const styles = StyleSheet.create({
  push: {
    marginBottom: 10,
  },
})
