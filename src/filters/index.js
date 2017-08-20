export function capitalize ([first, ...rest]) {
  return first.toUpperCase() + rest.join('').toLowerCase()
}

export function uppercase (string) {
  return string.toUpperCase()
}

export function lowercase (string) {
  return string.toLowerCase()
}
