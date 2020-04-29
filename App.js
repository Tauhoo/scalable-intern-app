import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import Navbar from "./components/Navbar"
import PageRouter from "./components/PagesRouter"
import KeyCancellator from "./components/KeyCancellator"
import { gray } from "./config/color"
import Store from "./store"

import socketGenerator from "./libs/socket"

export default function App() {
  useEffect(() => {
    const socket = socketGenerator.getInstance()
    return socket.destroy
  })
  return (
    <Store>
      <KeyCancellator>
        <View style={styles.container}>
          <Navbar></Navbar>
          <PageRouter></PageRouter>
        </View>
      </KeyCancellator>
    </Store>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: gray,
  },
})
