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
import { careers, bank } from "../../config/form"

import { setFormField } from "../../store/actions/form"
import { connect } from "react-redux"

const Form = ({ data, updateField }) => {
  const onSubmit = () => {
    const isValid = validateForm(data, updateField)
    console.log(isValid)
  }
  return (
    <Card>
      <Text style={styles.topic}>Register</Text>
      <TextInput
        placeholder='firstname'
        containerStyle={styles.textInput}
        checker={nameValidator("firstname")}
        index='firstname'
      ></TextInput>
      <TextInput
        placeholder='lastname'
        containerStyle={styles.textInput}
        checker={nameValidator("lastname")}
        index='lastname'
      ></TextInput>
      <DateInput containerStyle={styles.textInput} index='birtday'></DateInput>
      <OptionInput
        topic='career'
        options={careers}
        style={styles.textInput}
        index='career'
      ></OptionInput>
      <TextInput
        placeholder='income'
        indexboardType='number-pad'
        containerStyle={styles.textInput}
        index='income'
        checker={incomeValidator}
      ></TextInput>
      <TextInput
        placeholder='bank id'
        containerStyle={styles.textInput}
        checker={bankIdValidator}
        index='bankId'
      ></TextInput>
      <OptionInput
        topic='bank'
        options={bank}
        style={styles.textInput}
        index='bank'
      ></OptionInput>
      <Button
        containerStyle={styles.textInput}
        onClick={onSubmit}
        title='submit'
      ></Button>
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

const mapStateToProps = ({ formReducer }) => ({ data: formReducer })
const mapDispatchToProps = (dispatch) => ({
  updateField: (key, load) => dispatch(setFormField(key, load)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
