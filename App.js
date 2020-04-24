import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <View>
      <Navbar></Navbar>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})