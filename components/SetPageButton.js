import React from "react"
import { View } from "react-native"
import { setCurrentPage } from "../store/actions/pages"
import { connect } from "react-redux"

const SetPageButton = ({ style, renderer, currentPage, goto }) => {
  return <View style={style}>{renderer(currentPage, goto)}</View>
}

const mapStateToProps = ({ pagesReducer }) => pagesReducer

const mapDispatchToProps = (dispatch) => ({
  goto: (pageName) => dispatch(setCurrentPage(pageName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetPageButton)
