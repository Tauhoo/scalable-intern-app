export const setUserLoginState = (state) => ({
  type: "SET_USER_LOGIN",
  state,
})
export const setUserProfile = (load) => ({
  type: "SET_USER_PROFILE",
  load,
})

export const loginStates = {
  LOGING_IN: "LOGING_IN",
  LOGINED: "LOGINED",
  NOT_LOGINED: "NOT_LOGINED",
}
