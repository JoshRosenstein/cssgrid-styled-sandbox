import R from 'ramda'
import PropTypes from 'prop-types'
import theme, { breakpoints } from '../theme'

const fallbackPropTypes = {
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  numberOrString: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

///ramda equivelent
const isFunction = R.is(Function)
const mapIndexed = R.addIndex(R.map)
const notNaN = R.o(R.not, isNaN)
const notNil = R.o(R.not, R.isNil)
const isNumber = R.is(Number)
const toArr = R.cond([[R.is(Array), temp => temp], [R.T, (...arr) => arr]])
const map2 = R.curry((fn, prop) => R.map(fn)(toArr(prop)))
const pathComponents = R.split('.')
const getNonArray = (args = '', alt = '') =>
  R.contains('.', args)
    ? R.pathOr(alt)(pathComponents(args))
    : R.propOr(alt, args)

export const get2 = (args = '', alt = '') =>
  Array.isArray(args) ? R.pathOr(alt, args) : getNonArray(args, alt)

//keep original api
export const is = n => notNil(n)
export const num = n => isNumber(n)
export const px = n => (num(n) ? n + 'px' : n)
export const neg = n => R.gt(0)(n)
export const arr = n => toArr(n)

export const get = (obj, path, fallback) =>
  path.split('.').reduce((a, b) => (a && a[b] ? a[b] : null), obj) || fallback

export const mq = n => `@media screen and (min-width: ${px(n)})`

const fallbackTheme = get2('theme', theme)

export const breaks = props => [
  null,
  ...map2(mq)(get2('theme.breakpoints', breakpoints)(props))
]

export const dec = props => val =>
  toArr(props).reduce((acc, prop) => ((acc[prop] = val), acc), {})

export const media = bp => (val, idx, list) =>
  notNil(val) ? (bp[idx] ? { [bp[idx]]: val } : val) : null

export const getValue = (val, getter, toPx) =>
  isFunction(getter) ? getter(val) : toPx ? px(val) : val

export const customStyle = ({
  prop,
  key,
  getter,
  numberToPx,
  cssgetter
}) => props => {
  const n = notNil(props[prop]) && props[prop]
  if (R.isNil(n)) return null
  const th = fallbackTheme(props)
  const sx = n => getValue(get2([key, n], n)(th), getter, numberToPx)
  const cssProperty = val =>
    isFunction(cssgetter) ? cssgetter(props)(val) : cssgetter

  if (!Array.isArray(n)) {
    const val = sx(n)
    return dec(cssProperty(val))(val)
  }

  const s1 = map2(sx)(n)

  const fn = cssfunc => sxi => {
    //const getCssProp = cssfunc(props)(sxi)
    return dec(cssProperty(sxi))(sxi)
  }

  var s2 = map2(fn(cssgetter))(s1)

  const bp = breaks(props)
  var s3 = mapIndexed(media(bp))(s2)
  const reduceit = R.reduce(R.merge, {})

  const s4 = R.cond([
    [R.is(Array), temp => reduceit(temp)],
    [R.T, temp => temp]
  ])
  const s5 = s4(s3)
  return s5
}
