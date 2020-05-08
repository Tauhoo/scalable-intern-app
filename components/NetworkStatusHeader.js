import React from "react"
import { connect } from "react-redux"
import { View, StyleSheet, Text } from "react-native"
import { white } from "../config/color"

const NetWorkStatusHeader = ({ socketConnection, internetConnection }) => {
  if (!internetConnection) {
    return (
      <View style={styles.warning}>
        <Text style={styles.text}>internet connection fail</Text>
      </View>
    )
  }

  if (!socketConnection) {
    return (
      <View style={styles.warning}>
        <Text style={styles.text}>socket connecting</Text>
      </View>
    )
  }

  return null
}

const mapStateToProps = ({ networkReducer }) => networkReducer

export default connect(mapStateToProps)(NetWorkStatusHeader)

const styles = StyleSheet.create({
  warning: {
    backgroundColor: "red",
    width: "100%",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: white,
  },
})
