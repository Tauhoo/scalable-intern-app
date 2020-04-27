import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Navbar from "./components/Navbar"
import PageRouter from "./components/PagesRouter"
import KeyCancellator from "./components/KeyCancellator"
import { gray } from "./config/color"
import Store from "./store"

export default function App() {
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
