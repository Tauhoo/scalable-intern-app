export const nameValidator = (field) => (val) => {
  if (/^\w*$/.test(val)) return { isValid: true }
  return { isValid: false, notificate: field + " can contain only a-z or A-Z" }
}
