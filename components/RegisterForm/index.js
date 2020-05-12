import React from "react"
import { StyleSheet } from "react-native"
import Card from "../Card"
import Text from "../Text"
import TextInput from "../TextInput"
import {
  nameValidator,
  validateForm,
  incomeValidator,
  bankIdValidator,
  emailValidator,
  passwordValidator,
  repasswordValidator,
} from "./validator"
import DateInput from "../DateInput"
import OptionInput from "../OptionInput"
import Button from "../Button"
import Link from "../Link"
import { convertStateToData } from "../../libs/form"
import { careers, bank } from "../../config/form"

import { setFormField } from "../../store/actions/form"
import { setCurrentPage } from "../../store/actions/pages"
import { connect } from "react-redux"

import socketGenerator from "../../libs/socket"

const Form = ({ data, updateField, network, goto }) => {
  const { socketConnection } = network

  const onSubmit = () => {
    const isValid = validateForm(data, updateField)
    if (!isValid) return
    const packet = convertStateToData(data)
    const socket = socketGenerator.getInstance()
    socket.emitEvent("REGISTER", packet)
    goto()
  }

  const onChangeText = (checker, index) => ({ nativeEvent }) => {
    const { text } = nativeEvent
    if (checker) {
      const result = checker(text)
      updateField(index, {
        isValid: result.isValid,
        notificate: result.isValid ? "" : result.notificate,
        value: text,
      })
    } else {
      updateField(index, {
        value: text,
      })
    }
  }

  const onChangePassword = (repassword) => ({ nativeEvent }) => {
    const { text } = nativeEvent
    const passResult = passwordValidator(text)
    updateField("password", {
      isValid: passResult.isValid,
      notificate: passResult.isValid ? "" : passResult.notificate,
      value: text,
    })
    const repassResult = repasswordValidator({ value: text })(repassword.value)
    console.log(repassResult)

    updateField("repassword", {
      isValid: repassResult.isValid,
      notificate: repassResult.isValid ? "" : repassResult.notificate,
    })
  }

  const onChangeDate = (data) => {
    updateField("birtday", { value: data })
  }

  const onChangeOption = (index) => (newValue) => {
    updateField(index, { value: newValue })
  }

  return (
    <Card>
      <Text style={styles.topic}>Register</Text>
      <TextInput
        placeholder='firstname'
        containerStyle={styles.textInput}
        onChange={onChangeText(nameValidator("firstname"), "firstname")}
        value={data.firstname}
      ></TextInput>
      <TextInput
        placeholder='lastname'
        containerStyle={styles.textInput}
        onChange={onChangeText(nameValidator("lastname"), "lastname")}
        value={data.lastname}
      ></TextInput>
      <TextInput
        placeholder='email'
        containerStyle={styles.textInput}
        onChange={onChangeText(emailValidator, "email")}
        value={data.email}
      ></TextInput>
      <TextInput
        placeholder='password'
        containerStyle={styles.textInput}
        onChange={onChangePassword(data.repassword)}
        value={data.password}
      ></TextInput>
      <TextInput
        placeholder='re-password'
        containerStyle={styles.textInput}
        onChange={onChangeText(
          repasswordValidator(data.password),
          "repassword"
        )}
        value={data.repassword}
      ></TextInput>
      <DateInput
        containerStyle={styles.textInput}
        onChange={onChangeDate}
        value={data.birtday.value}
      ></DateInput>
      <OptionInput
        topic='career'
        options={careers}
        style={styles.textInput}
        value={data.career.value}
        onChange={onChangeOption("career")}
      ></OptionInput>
      <TextInput
        placeholder='income'
        indexboardType='number-pad'
        containerStyle={styles.textInput}
        onChange={onChangeText(incomeValidator, "income")}
        value={data.income}
      ></TextInput>
      <TextInput
        placeholder='bank id'
        containerStyle={styles.textInput}
        onChange={onChangeText(bankIdValidator, "bankId")}
        value={data.bankId}
      ></TextInput>
      <OptionInput
        topic='bank'
        options={bank}
        style={styles.textInput}
        value={data.bank.value}
        onChange={onChangeOption("bank")}
      ></OptionInput>
      <Button
        containerStyle={styles.textInput}
        onClick={onSubmit}
        title='submit'
        disable={!socketConnection}
      ></Button>
      <Link src='index'>
        <Button
          title='cancel'
          containerStyle={styles.cancelButtonContainer}
        ></Button>
      </Link>
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
  cancelButtonContainer: {
    backgroundColor: "#e74c3c",
    marginVertical: 5,
  },
})

const mapStateToProps = ({ registerFormReducer, networkReducer }) => ({
  data: registerFormReducer,
  network: networkReducer,
})
const mapDispatchToProps = (dispatch) => ({
  updateField: (key, load) => dispatch(setFormField(key, load)),
  goto: () => dispatch(setCurrentPage("index")),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
