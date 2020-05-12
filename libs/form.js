export const convertStateToData = (state) => {
  let result = {}
  result.bank_name = +state.bank.value
  result.bank_id = state.bankId.value
  const birtday = new Date(state.birtday.value.replace(/-/g, "/"))
  result.birtday = new Date().getFullYear() - new Date(birtday).getFullYear()
  result.career = +state.career.value
  result.income = +state.income.value
  result.firstname = state.firstname.value
  result.income = +state.income.value
  result.lastname = state.lastname.value
  result.password = state.password.value
  result.email = state.email.value
  return result
}
