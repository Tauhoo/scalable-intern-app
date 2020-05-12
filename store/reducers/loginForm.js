import moment from "moment"

const initailState = {
  email: { isValid: true, notificate: "", value: "" },
  password: { isValid: true, notificate: "", value: "" },
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.load }
    case "SET_PASSWORD":
      return { ...state, password: action.load }
    default:
      return state
  }
}
