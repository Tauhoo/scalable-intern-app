import React from "react"
import { StyleSheet, View } from "react-native"

export default ({ style, children }) => (
  <View style={{ ...style, ...styles.container }}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
})
