export const nameValidator = (field) => (val) => {
  if (val === "")
    return {
      isValid: false,
      notificate: field + " must have at least one charecter",
    }
  if (/^\w+$/.test(val)) return { isValid: true }
  return { isValid: false, notificate: field + " can contain only a-z or A-Z" }
}
