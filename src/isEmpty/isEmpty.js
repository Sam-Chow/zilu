export default value =>
  (typeof value === 'string' && value.length) ||
  (!(value === null || !typeof value === 'object') &&
    ((typeof value.length === 'number' && value.length) ||
      (typeof value.size === 'number' && value.size) ||
      Object.keys(value).length))
