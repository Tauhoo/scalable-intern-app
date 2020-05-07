import React, { Component } from "react"
import ModalRenderer from "./ModalRenderer"

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
          return <ModalRenderer {...data} index={index}></ModalRenderer>
        })}
      </>
    )
  }
}
