import React, { Component } from "react"
import ModalRenderer from "./ModalRenderer"
import correctIcon from "../assets/icon/correct.png"
import incorrectIcon from "../assets/icon/incorrect.png"
import warningIcon from "../assets/icon/warning.png"
import Icon from "../components/Icon"

export default class Modal extends Component {
  state = {
    modals: [],
  }

  onClose = (closeId) => {
    this.setState({
      modals: this.state.modals.filter(({ id }) => id !== closeId),
    })
  }

  popup = (modalData) => {
    const id = `${Date.now()}`
    this.setState({
      modals: [
        ...this.state.modals,
        { key: id, id, ...modalData, onClose: this.onClose },
      ],
    })
  }

  constructor(props) {
    super(props)
    Modal.popup = this.popup
  }

  render() {
    return (
      <>
        {this.props.children}
        {this.state.modals.map((data, index) => {
          let prefix = null
          switch (data.status) {
            case 0:
              prefix = correctIcon
              break
            case 1:
              prefix = warningIcon
            case 2:
              prefix = incorrectIcon
              break
            default:
              break
          }
          return (
            <ModalRenderer
              {...data}
              index={index}
              prefix={<Icon src={prefix} />}
            ></ModalRenderer>
          )
        })}
      </>
    )
  }
}
