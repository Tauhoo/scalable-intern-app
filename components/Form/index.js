import React from "react"
import { StyleSheet } from "react-native"
import Card from "../Card"
import Text from "../Text"
import TextInput from "../TextInput"
import { nameValidator } from "./validator"
import DateInput from "../DateInput"
import OptionInput from "../OptionInput"
import Button from "../Button"
import { careers, bank } from "../../config/form"
import { connect } from "react-redux"

const Form = ({ data }) => {
  const onSubmit = () => {
    console.log(data)
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
      ></TextInput>
      <TextInput
        placeholder='bank id'
        containerStyle={styles.textInput}
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

export default connect(mapStateToProps)(Form)
