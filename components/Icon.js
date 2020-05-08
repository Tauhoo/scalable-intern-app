import React from "react"
import { StyleSheet, Image } from "react-native"

export default ({ src }) => {
  return <Image style={styles.icon} source={src} />
}

styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
    marginRight: 5,
  },
})
