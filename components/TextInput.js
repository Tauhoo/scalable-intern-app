import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"
import { gray } from "../config/color"

import { setFormField } from "../store/actions/form"
import { connect } from "react-redux"

const TextInputComponent = ({
  style,
  placeholder,
  password,
  checker,
  containerStyle,
  keyboardType,
  updateField,
  index,
  formReducer,
}) => {
  const { isValid, notificate } = formReducer[index]

  const [isFocus, setFocus] = useState(false)

  const onChangeValue = ({ nativeEvent }) => {
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

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {isFocus ? <Text style={styles.placeholder}>{placeholder}</Text> : null}
      {isValid ? null : <Text style={styles.notificate}>{notificate}</Text>}
      <TextInput
        keyboardType={keyboardType}
        onChange={onChangeValue}
        secureTextEntry={password}
        placeholder={placeholder}
        style={{ ...styles.input, ...style }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {},
  container: {
    backgroundColor: gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  placeholder: { fontSize: 12, marginBottom: 8, color: "#2c3e50" },
  notificate: { color: "#c0392b", marginBottom: 8 },
})

const mapStateToProps = ({ formReducer }) => ({ formReducer })

const mapDispatchToProps = (dispatch) => ({
  updateField: (key, load) => dispatch(setFormField(key, load)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)
