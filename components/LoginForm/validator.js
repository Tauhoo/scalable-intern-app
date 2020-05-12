export const emailValidator = (email) => {
  if (email === "") return { isValid: false, notificate: "email is empty" }
  const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (validator.test(email)) return { isValid: true }
  return { isValid: false, notificate: "email is in wrong format" }
}

export const validateForm = (formData, setPassword, setEmail) => {
  const { email } = formData

  // email
  const emailValidate = emailValidator(email.value)
  if (!emailValidate.isValid) {
    setEmail(emailValidate)
    return false
  }

  return true
}
