import { setCurrentPage } from "../store/actions/pages"
import { connect } from "react-redux"

const mapStateToProps = ({ pagesReducer }) => pagesReducer

const mapDispatchToProps = (dispatch) => ({
  goto: (pageName) => dispatch(setCurrentPage(pageName)),
})

export default (button) => connect(mapStateToProps, mapDispatchToProps)(button)
