import { loginStates } from "../actions/user"

const initailState = {
  loginState: loginStates.NOT_LOGINED,
  profile: null,
  profileLoading: false,
}

/*
{
    firstname
    lastname
    email
    age
    career
    bank_id
    bank_name
}
*/

export default (state = initailState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
      return { ...state, loginState: action.state }
    case "SET_USER_PROFILE":
      return { ...state, profile: action.load }
    default:
      return state
  }
}
