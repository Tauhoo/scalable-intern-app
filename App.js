import React, { useEffect, useState } from "react"
import { StyleSheet, Keyboard, ScrollView, View } from "react-native"
import Navbar from "./components/Navbar"
import PageRouter from "./components/PagesRouter"
import KeyCancellator from "./components/KeyCancellator"
import { gray } from "./config/color"
import Store from "./store"

import socketGenerator from "./libs/socket"

export default function App() {
  const [keyBoardHeight, setKeyBoardHeight] = useState(0)
  const keyboardShowHandler = (e) => {
    setKeyBoardHeight(e.endCoordinates.height)
  }

  const keyboardHideHandler = (e) => {
    setKeyBoardHeight(0)
  }

  useEffect(() => {
    const socket = socketGenerator.getInstance()
    return socket.destroy
  })

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardShowHandler)
    Keyboard.addListener("keyboardDidHide", keyboardHideHandler)
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardShowHandler)
      Keyboard.removeListener("keyboardDidHide", keyboardHideHandler)
    }
  })

  console.log(keyBoardHeight)
  const mainStyle = styles(keyBoardHeight)
  return (
    <Store>
      <KeyCancellator>
        <ScrollView style={mainStyle.container}>
          <Navbar></Navbar>
          <PageRouter></PageRouter>
          <View style={mainStyle.keyBoard} />
        </ScrollView>
      </KeyCancellator>
    </Store>
  )
}

const styles = (keyBoardHeight) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: gray,
    },
    keyBoard: {
      width: "100%",
      height: keyBoardHeight + 10,
    },
  })
