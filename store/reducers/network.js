const initailState = {
  socketConnection: false,
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_SOCKET_CONNECTION":
      return { ...state, socketConnection: action.socketConnection }
    default:
      return state
  }
}
