import React from "react"
import { Text, StyleSheet } from "react-native"
import { normalSize, topicSize } from "../config/font"
import { black } from "../config/color"

export default ({ topic, children, style }) => {
  const mainStyle = topic ? styles.topic : styles.normal
  return <Text style={{ ...mainStyle, ...style }}>{children}</Text>
}

const styles = StyleSheet.create({
  topic: {
    fontSize: topicSize,
    color: black,
  },
  normal: {
    fontSize: normalSize,
    color: black,
  },
})
