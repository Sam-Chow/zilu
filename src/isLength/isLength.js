export default value =>
  typeof value === 'number' &&
  value >= 0 &&
  value % 1 === 0 &&
  value <= Number.MAX_SAFE_INTEGER
