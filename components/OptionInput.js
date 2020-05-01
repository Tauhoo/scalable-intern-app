import React, { useState } from "react"
import SelectInput from "react-native-select-input-ios"
import { View, StyleSheet, Text } from "react-native"
import { gray } from "../config/color"
import { normalSize } from "../config/font"

export default ({ options, style, topic, value, onChange }) => {
  const [active, setActive] = useState(false)

  const onChangeOption = (value) => {
    onChange(value)
    setActive(false)
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      {active ? <Text style={styles.topic}>{topic}</Text> : null}
      <SelectInput
        value={value}
        options={options}
        labelStyle={styles.label}
        onBeginEditing={() => setActive(true)}
        onEndEditing={() => setActive(false)}
        onSubmitEditing={onChangeOption}
        onEndEditing={() => setActive(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray,
    borderRadius: 10,
    padding: 10,
  },
  label: {
    fontSize: normalSize,
    textAlign: "center",
  },
  topic: {
    fontSize: 12,
    marginBottom: 5,
    color: "#2c3e50",
  },
})
