/**
 * 任意函数类型。
 */
export type AnyFunction = (...args: any[]) => any

/**
 * 任意对象类型。
 */
export type AnyObject = Record<keyof any, any>

/**
 * 名义化类型。
 *
 * @example
 * ```ts
 * type User = { id: Brand<number, User>, name: string }
 * type Post = { id: Brand<number, Post>, title: string }
 * type UserIdIsNumber = User['id'] extends number ? true: false // => true
 * type PostIdIsNumber = Post['id'] extends number ? true: false // => true
 * type PostIdIsNotUserId = Post['id'] extends User['id'] ? false : true // => true
 * ```
 */
export type TBrand<T, B> = T & { __kind__?: B }

/**
 * 字面量联合类型
 */
export type TLiteralUnion<L, B> = L | TBrand<B, never>

/**
 * 从 `T` 中排除 `undefined` 类型。
 *
 * @example
 * ```ts
 * interface User {
 *   gender?: 'male' | 'female',
 * }
 * // before
 * type UserGender = Exclude<User['gender'], undefined>
 * // after
 * type UserGender = Defined<User['gender']>
 * ```
 */
export type Defined<T> = Exclude<T, undefined>
