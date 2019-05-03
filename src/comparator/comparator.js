export default pred => (x, y) => (pred(x, y) ? -1 : pred(y, x) ? 1 : 0)
