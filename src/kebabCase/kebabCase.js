export default str =>
  str
    .replace(/\d+/g, x => `-${x}-`)
    .replace(/[A-Z](?=[a-z])/g, x => `-${x.toLowerCase()}`)
    .replace(/[A-Z]+/g, x => `-${x.toLowerCase()}`)
    .replace(/[^-0-9a-zA-Z]*/g, () => '')
    .trim()
    .replace(/^-*|-*$/g, () => '')
    .replace(/-+/g, () => '-')
