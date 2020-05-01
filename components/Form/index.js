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
} from "./validator"
import DateInput from "../DateInput"
import OptionInput from "../OptionInput"
import Button from "../Button"
import Link from "../Link"
import { careers, bank } from "../../config/form"

import { setFormField } from "../../store/actions/form"
import { connect } from "react-redux"
import socketGenerator from "../../libs/socket"

const Form = ({ data, updateField }) => {
  const onSubmit = () => {
    console.log(data)
    const isValid = validateForm(data, updateField)
    if (!isValid) return
    const socket = socketGenerator.getInstance()
    const status = socket.emitEvent("register", JSON.stringify(data))
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

const mapStateToProps = ({ formReducer }) => ({ data: formReducer })
const mapDispatchToProps = (dispatch) => ({
  updateField: (key, load) => dispatch(setFormField(key, load)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
