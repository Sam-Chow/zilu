import isNil from '../isNil'
import isLength from '../isLength'

export default value =>
  !isNil(value) && typeof value !== 'function' && isLength(value.length)
