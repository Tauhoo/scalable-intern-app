import moment from "moment"

const initailState = {
  firstname: { isValid: true, notificate: "", value: "" },
  lastname: { isValid: true, notificate: "", value: "" },
  birtday: {
    isValid: true,
    notificate: "",
    value: moment(new Date()).format("DD-MM-YYYY"),
  },
  career: { isValid: true, notificate: "", value: 0 },
  income: { isValid: true, notificate: "", value: "" },
  bankId: { isValid: true, notificate: "", value: "" },
  bank: { isValid: true, notificate: "", value: 0 },
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      let currentState = { ...state }
      currentState[action.key] = { ...currentState[action.key], ...action.load }
      return currentState
    default:
      return state
  }
}
