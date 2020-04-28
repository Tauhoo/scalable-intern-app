export const nameValidator = (field) => (val) => {
  if (val === "")
    return {
      isValid: false,
      notificate: field + " must have at least one charecter",
    }
  if (/^\w+$/.test(val)) return { isValid: true }
  return { isValid: false, notificate: field + " can contain only a-z or A-Z" }
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

export const validateForm = (formData, updateField) => {
  const { firstname, lastname, income, bankId } = formData

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
