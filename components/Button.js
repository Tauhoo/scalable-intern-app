import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { primary, white } from "../config/color"

export default ({ title, containerStyle, onClick, textStyle, disable }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onClick} disabled={disable}>
      <View style={{ ...styles(disable).container, ...containerStyle }}>
        <Text style={{ ...styles(disable).title, ...textStyle }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = (disable) =>
  StyleSheet.create({
    title: { color: white },
    container: {
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: disable ? "#b2bec3" : primary,
    },
  })
