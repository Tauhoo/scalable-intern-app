import io from "socket.io-client"
import { socketLocation, socketOptions } from "../config/network"
import { Alert } from "react-native"

class Socket {
  constructor() {
    this.createSocket()
  }

  createSocket = () => {
    this.socket = io(socketLocation, socketOptions)
    this.socket.on("reconnect_attempt", () => {
      this.socket.io.opts.transports = ["polling", "websocket"]
    })
    this.socket.on("connect", this.onConnect)
    this.socket.on("disconnect", this.onDisconnect)
    this.socket.on("notification", this.onNotificateEvent)
  }

  destroy = () => {
    this.socket.removeAllListeners()
    this.socket.off()
    this.socket.disconnect()
  }

  onDisconnect = () => {
    console.log("disconnect")
  }

  onConnect = () => {
    console.log("connect")
  }

  getConnectStatus = () => this.socket.connected

  onNotificateEvent = (data) => {
    console.log(data)

    const { title, detail } = data
    console.log(title, detail)

    Alert.alert(
      title,
      detail,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ],
      { cancelable: false }
    )
  }

  emitEvent = (event, data) => {
    if (this.getConnectStatus()) {
      this.socket.emit(event, data)
      return true
    }
    return false
  }
}

class socketGenerator {
  static instance
  static getInstance = () => {
    if (this.instance === undefined) this.instance = new Socket()
    return this.instance
  }
}

export default socketGenerator
