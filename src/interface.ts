// 任意函数类型
export type TAnyFunction = (...args: any[]) => any;

// 任意对象类型
export type TAnyObject = Record<keyof any, any>;

export type TOneOrMore<T> = T | T[];

// 名义化类型
export type TBrand<T, B> = T & { __kind__?: B }

// 字面量联合类型
export type TLiteralUnion<L, B> = L | TBrand<B, never>
