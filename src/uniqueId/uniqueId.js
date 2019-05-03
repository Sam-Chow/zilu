let idCounter = 0

export default (prefix = '') => `${prefix}${idCounter++}`
