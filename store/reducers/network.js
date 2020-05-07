const initailState = {
  socketConnection: false,
  internetConnection: false,
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_SOCKET_CONNECTION":
      return { ...state, socketConnection: action.socketConnection }
    case "SET_INTERNET_CONNECTION":
      return { ...state, internetConnection: action.internetConnection }
    default:
      return state
  }
}
