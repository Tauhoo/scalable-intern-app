import React, { useEffect, useState } from "react"
import { StyleSheet, Keyboard, ScrollView, View } from "react-native"
import Navbar from "./components/Navbar"
import PageRouter from "./components/PagesRouter"
import KeyCancellator from "./components/KeyCancellator"
import Modal from "./components/Modal"
import { gray } from "./config/color"
import Store from "./store"
import NetworkManager from "./components/NetworkManager"

export default function App() {
  const [keyBoardHeight, setKeyBoardHeight] = useState(0)
  const keyboardShowHandler = (e) => {
    setKeyBoardHeight(e.endCoordinates.height)
  }

  const keyboardHideHandler = (e) => {
    setKeyBoardHeight(0)
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardShowHandler)
    Keyboard.addListener("keyboardDidHide", keyboardHideHandler)
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardShowHandler)
      Keyboard.removeListener("keyboardDidHide", keyboardHideHandler)
    }
  })

  const mainStyle = styles(keyBoardHeight)
  return (
    <Store>
      <KeyCancellator>
        <Modal>
          <NetworkManager>
            <ScrollView style={mainStyle.container}>
              <Navbar></Navbar>
              <PageRouter></PageRouter>
              <View style={mainStyle.keyBoard} />
            </ScrollView>
          </NetworkManager>
        </Modal>
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
