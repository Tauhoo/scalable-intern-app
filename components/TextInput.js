import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"
import { gray } from "../config/color"

export default ({
  style,
  placeholder,
  onChange,
  password,
  checker,
  containerStyle,
}) => {
  const [isFocus, setFocus] = useState(false)
  const [noti, setNoti] = useState("")
  const [valid, setValid] = useState(true)

  const onChangeValue = ({ nativeEvent }) => {
    const { text } = nativeEvent
    if (!onChange) return
    if (checker) {
      const { isValid, notificate } = checker(text)
      if (isValid) {
        setNoti("")
        setValid(true)
        return onChange(text)
      } else {
        setNoti(notificate)
        setValid(false)
        return
      }
    }

    onChange(text)
  }
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {isFocus ? <Text style={styles.placeholder}>{placeholder}</Text> : null}
      {valid ? null : <Text style={styles.notificate}>{noti}</Text>}
      <TextInput
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
