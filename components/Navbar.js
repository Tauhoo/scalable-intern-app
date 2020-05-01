import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "./Text"
import { primary } from "../config/color"
import { white } from "../config/color"

export default () => {
  return (
    <View style={styles.container}>
      <Text topic style={styles.topic}>
        Distribute Money
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topic: {
    color: white,
  },
  container: {
    backgroundColor: primary,
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
})
