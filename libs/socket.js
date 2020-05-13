import io from "socket.io-client"
import { socketLocation, socketOptions } from "../config/network"
import Modal from "../components/Modal"

import {
  setUserProfile,
  setUserLoginState,
  loginStates,
} from "../store/actions/user"

class Socket {
  constructor(dispatch) {
    this.dispatch = dispatch
    this.createSocket()
  }

  createSocket = () => {
    this.socket = io(socketLocation, socketOptions)
    this.socket.on("NOTIFICATE", this.onNotificateEvent)
    this.socket.on("LOGIN_RECEIVE", this.onLoginRecieve)
    this.socket.on("RECEIVE_PROFILE", this.onReceiveProfile)
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

  onLoginRecieve = (data) => {
    data = JSON.parse(data)
    this.dispatch(setUserProfile(data))
    this.dispatch(setUserLoginState(loginStates.LOGINED))
  }

  onReceiveProfile = (data) => {
    data = JSON.parse(data)
    this.dispatch(setUserProfile(data))
    this.dispatch(setUserLoginState(loginStates.LOGINED))
  }

  onNotificateEvent = (data) => {
    data = JSON.parse(data)
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
  static getInstance = (dispatch) => {
    if (this.instance === undefined) this.instance = new Socket(dispatch)
    return this.instance
  }
}

export default socketGenerator
