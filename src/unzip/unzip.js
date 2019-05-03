import isArrayLike from '../isArrayLike'
import zip from '../zip/zip'

export default arr => (isArrayLike(arr) ? zip(...arr) : [])
