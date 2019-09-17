/**
 * Url正则
 *
 * @since 0.0.6
 *
 * @example
 *
 * urlRegex.test('https://www.baidu.com')
 * // => true
 * */
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

export default urlRegex
