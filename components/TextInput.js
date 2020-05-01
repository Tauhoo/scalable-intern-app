import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"
import { gray } from "../config/color"

export default ({
  style,
  placeholder,
  password,
  containerStyle,
  keyboardType,
  value,
  onChange,
}) => {
  const [isFocus, setFocus] = useState(false)

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {isFocus ? <Text style={styles.placeholder}>{placeholder}</Text> : null}
      {value.isValid ? null : (
        <Text style={styles.notificate}>{value.notificate}</Text>
      )}
      <TextInput
        keyboardType={keyboardType}
        onChange={onChange}
        secureTextEntry={password}
        value={value.value}
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
