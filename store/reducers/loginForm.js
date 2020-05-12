import moment from "moment"

const initailState = {
  email: { isValid: true, notificate: "", value: "" },
  password: { isValid: true, notificate: "", value: "" },
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      let currentEmailState = { ...state }
      currentEmailState.email = { ...currentEmailState.email, ...action.load }
      return currentEmailState
    case "SET_PASSWORD":
      let currentPasswordState = { ...state }
      currentPasswordState.password = {
        ...currentPasswordState.password,
        ...action.load,
      }
      return currentPasswordState
    default:
      return state
  }
}
