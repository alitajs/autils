/**
 * 邮箱正则
 *
 * @since 0.0.6
 * @example
 *
 * ```js
 * emailRegexp.test('156148958@qq.com')
 * // => true
 * ```
 * */
const emailRegexp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

export default emailRegexp;
