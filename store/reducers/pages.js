const initailState = {
  currentPage: "index",
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.page }
    default:
      return state
  }
}
