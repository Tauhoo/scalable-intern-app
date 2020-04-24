import React from "react"
import Index from "../pages/Index"
import Register from "../pages/Register"

import { connect } from "react-redux"

const PagesRouter = ({ currentPage }) => {
  switch (currentPage) {
    case "index":
      return <Index />
    case "register":
      return <Register />
    default:
      return null
  }
}
const mapStateToProps = ({ pagesReducer }) => pagesReducer

export default connect(mapStateToProps)(PagesRouter)
