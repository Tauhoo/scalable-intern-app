import io from "socket.io-client"
import { socketLocation, socketOptions } from "../config/network"
import Modal from "../components/Modal"

class Socket {
  constructor() {
    this.createSocket()
  }

  createSocket = () => {
    this.socket = io(socketLocation, socketOptions)
    this.socket.on("NOTIFICATE", this.onNotificateEvent)
  }

  destroy = () => {
    this.socket.removeAllListeners()
    this.socket.off()
    this.socket.disconnect()
  }

  setOnDisconnect = (onDisconnect) => {
    this.socket.on("disconnect", onDisconnect)
  }

  setOnConnect = (onConnect) => {
    this.socket.on("connect", onConnect)
  }

  getConnectStatus = () => this.socket.connected

  onNotificateEvent = (data) => {
    Modal.popup(data)
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
