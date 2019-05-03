import isNaN from '../isNaN'
import isNil from '../isNil'

export default (value, defaultValue) =>
  isNaN(value) || isNil(value) ? value : defaultValue
