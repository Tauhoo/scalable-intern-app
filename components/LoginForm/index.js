import React from "react"
import { StyleSheet } from "react-native"
import Card from "../Card"
import Text from "../Text"
import Button from "../Button"
import Link from "../Link"
import TextInput from "../TextInput"
import { emailValidator, validateForm } from "./validator"
import { convertStateToLoginData } from "../../libs/form"
import socketGenerator from "../../libs/socket"

import { connect } from "react-redux"
import { setEmail, setPassword } from "../../store/actions/loginForm"

const LoginForm = ({ email, password, setPasswordState, setEmailState }) => {
  const onChange = (field) => ({ nativeEvent }) => {
    const { text } = nativeEvent
    if (field === "email") {
      setEmailState({ value: text, ...emailValidator(text) })
    } else {
      setPasswordState({ value: text })
    }
  }

  const onSubmit = () => {
    const data = { email, password }
    const isValid = validateForm(data, setPassword, setEmail)
    if (!isValid) return
    const packet = convertStateToLoginData(data)
    const socket = socketGenerator.getInstance()
    socket.emitEvent("LOGING_IN", packet)
    console.log(packet)
  }

  return (
    <Card>
      <Text style={styles.push}>Login</Text>
      <TextInput
        placeholder='email'
        containerStyle={styles.push}
        value={email}
        onChange={onChange("email")}
      ></TextInput>
      <TextInput
        placeholder='password'
        containerStyle={styles.push}
        value={password}
        onChange={onChange("password")}
      ></TextInput>
      <Button containerStyle={styles.push} title='submit' onClick={onSubmit} />
      <Link src='index'>
        <Button title='cancel' containerStyle={styles.cancelButton} />
      </Link>
    </Card>
  )
}

const styles = StyleSheet.create({
  push: {
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
})

const mapStateToProps = ({ loginFormReducer }) => loginFormReducer

const mapDispatchToProps = (dispatch) => ({
  setEmailState: (email) => dispatch(setEmail(email)),
  setPasswordState: (password) => dispatch(setPassword(password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
