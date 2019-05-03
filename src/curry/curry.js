const curry = func => (...args) =>
  func.length - args.length <= 0
    ? func(...args)
    : curry(func.bind(null, ...args))

export default curry
