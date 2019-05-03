export default (...funcs) => (...args) =>
  funcs.reduceRight(
    (prev, current, i) => (i !== funcs.length - 1 ? current(prev) : prev),
    funcs[funcs.length - 1](...args),
  )
