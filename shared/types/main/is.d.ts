/// <reference path="./all.d.ts" />
/// <reference path="./object.d.ts" />

type IsNullable<T> = T extends null ? true : never;

type IsNeverType<T> = [T] extends [never] ? true : false;

type IsPartial<V> = [RemoveNotUndefinedValues<V>] extends [never]
  ? false
  : true;

type IsAllPartial<T> =
  __MakeIsPartialObject<T>[keyof __MakeIsPartialObject<T>] extends true
    ? true
    : false;

type __MakeIsPartialObject<T> = {
  [K in keyof T]-?: IsPartial<T[K]>;
};
