import isArrayLike from '../isArrayLike'

export default (...arr) => {
  let length = 0
  arr = arr.filter(
    item =>
      isArrayLike(item) && ((length = Math.max(length, item.length)) || true),
  )
  return new Array(length)
    .fill()
    .map((_, index) =>
      arr.reduce((prev, current) => prev.concat([current[index]]), []),
    )
}
