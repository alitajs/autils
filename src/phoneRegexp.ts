/**
 * 手机正则
 *
 * @since 0.0.6
 *
 * @example
 *
 * phoneRegexp.test('17710497878')
 * // => true
 * */
const phoneRegexp = /^(\+?0?86\-?)?1[3-9]\d{9}$/;

export default phoneRegexp;
