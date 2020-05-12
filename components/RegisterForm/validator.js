export const nameValidator = (field) => (val) => {
  if (val === "")
    return {
      isValid: false,
      notificate: field + " must have at least one charecter",
    }
  if (/^[a-zA-Z]+$/.test(val)) return { isValid: true }
  return { isValid: false, notificate: field + " can contain only a-z or A-Z" }
}

export const passwordValidator = (password) => {
  if (password === "")
    return {
      isValid: false,
      notificate: "password not found",
    }
  if (password.length >= 6) return { isValid: true }
  return { isValid: false, notificate: "password must be at least 6 charater" }
}

export const repasswordValidator = ({ value }) => (repassword) => {
  if (repassword === "")
    return {
      isValid: false,
      notificate: "repassword not found",
    }

  if (value !== repassword)
    return {
      isValid: false,
      notificate: "password and repassword not equal",
    }

  return { isValid: true }
}

export const incomeValidator = (val) => {
  if (val === "")
    return {
      isValid: false,
      notificate: "income not found",
    }
  if (/^[1-9]\d*$/.test(val)) return { isValid: true }
  return { isValid: false, notificate: "income can contain only number" }
}

export const bankIdValidator = (val) => {
  if (!/^\d*$/.test(val))
    return { isValid: false, notificate: "bank id can contain only number" }
  if (val.length !== 12)
    return {
      isValid: false,
      notificate: "bank id must contain 12 digit",
    }
  return { isValid: true }
}

export const emailValidator = (email) => {
  if (email === "") return { isValid: false, notificate: "email is empty" }
  const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (validator.test(email)) return { isValid: true }
  return { isValid: false, notificate: "email is in wrong format" }
}

export const validateForm = (formData, updateField) => {
  const {
    firstname,
    lastname,
    income,
    bankId,
    password,
    repassword,
    email,
  } = formData

  // firstname
  const firstnameValidate = nameValidator("firstname")(firstname.value)

  if (!firstnameValidate.isValid) {
    updateField("firstname", firstnameValidate)
    return false
  }

  // lastname
  const lastnameValidate = nameValidator("lastname")(lastname.value)
  if (!lastnameValidate.isValid) {
    updateField("lastname", lastnameValidate)
    return false
  }

  // email
  const emailValidate = emailValidator(email.value)
  if (!emailValidate.isValid) {
    updateField("email", emailValidate)
    return false
  }

  // password
  const passwordValidate = passwordValidator(password.value)
  if (!passwordValidate.isValid) {
    updateField("password", passwordValidate)
    return false
  }

  // password
  const repasswordValidate = repasswordValidator(password)(repassword.value)
  if (!repasswordValidate.isValid) {
    updateField("repassword", repasswordValidate)
    return false
  }

  // income
  const incomeValidate = incomeValidator(income.value)
  if (!incomeValidate.isValid) {
    updateField("income", incomeValidate)
    return false
  }

  // bankId
  const bankIdValidate = bankIdValidator(bankId.value)
  if (!bankIdValidate.isValid) {
    updateField("bankId", bankIdValidate)
    return false
  }

  return true
}
