import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { primary, white } from "../config/color"

export default ({ title, containerStyle, onClick }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onClick}>
      <View style={{ ...styles.container, ...containerStyle }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: { color: white },
  container: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: primary,
  },
})
