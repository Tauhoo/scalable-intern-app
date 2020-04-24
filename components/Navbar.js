import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "./Text"
import { primary } from "../config/color"

export default () => {
  return (
    <View style={styles.container}>
      <Text topic>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
})
