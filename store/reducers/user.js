const initailState = {
  isLogin: false,
  profile: null,
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
      return { ...state, isLogin: action.isLogin }
    case "SET_USER_PROFILE":
      return { ...state, profile: action.load }
    default:
      return state
  }
}
