import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import socketGenerator from "../libs/socket"

import { connect } from "react-redux"
import { setSocketConnection } from "../store/actions/network"

const NetWorkManager = ({ children, setSocketConnectionState, dispatch }) => {
  useEffect(() => {
    const socket = socketGenerator.getInstance(dispatch)

    socket.setOnConnect(() => setSocketConnectionState(true))

    socket.setOnDisconnect(() => setSocketConnectionState(false))

    return socket.destroy
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
  setSocketConnectionState: (state) => dispatch(setSocketConnection(state)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(NetWorkManager)
