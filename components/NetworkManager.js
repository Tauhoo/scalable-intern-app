import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import socketGenerator from "../libs/socket"
import NetInfo from "@react-native-community/netinfo"

import { connect } from "react-redux"
import {
  setInternetConnection,
  setSocketConnection,
} from "../store/actions/network"

const NetWorkManager = ({
  children,
  networkReducer,
  setInternetConnectionState,
  setSocketConnectionState,
}) => {
  const { internetConnection, socketConnection } = networkReducer
  console.log(internetConnection, socketConnection)

  useEffect(() => {
    const socket = socketGenerator.getInstance()

    socket.setOnConnect(() => {
      setSocketConnectionState(true)
    })

    socket.setOnDisconnect(() => {
      setSocketConnection(false)
    })

    return socket.destroy
  }, [])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      setInternetConnectionState(isConnected)
    })
    return unsubscribe
  }, [])
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
})

const mapStateToProps = ({ networkReducer }) => ({ networkReducer })

const mapDispatchToProps = (dispatch) => ({
  setInternetConnectionState: (state) => dispatch(setInternetConnection(state)),
  setSocketConnectionState: (state) => dispatch(setSocketConnection(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NetWorkManager)
