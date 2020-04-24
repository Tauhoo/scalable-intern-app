import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Navbar from "./components/Navbar"
import PageRouter from "./components/PagesRouter"
import Store from "./store"

export default function App() {
  return (
    <Store>
      <View style={styles.container}>
        <Navbar></Navbar>
        <PageRouter></PageRouter>
      </View>
    </Store>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
})
