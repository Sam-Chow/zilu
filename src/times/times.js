import identity from '../identity'
import {MAX_ARRAY_LENGTH} from '../consts'

export default (n, iteratee = identity) =>
  typeof n === 'number' && n > 0
    ? new Array(Math.floor(n <= MAX_ARRAY_LENGTH ? n : MAX_ARRAY_LENGTH))
        .fill()
        .map((_, index) => iteratee(index))
    : []
