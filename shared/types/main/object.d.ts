/// <reference path="./is.d.ts" />
/// <reference path="./all.d.ts" />

type AnyObject = Record<any, any>;

type NullableObject<T> = {
  [Key in keyof T]-?: Nullable<T[Key]>;
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]> | T[P];
};

type RemoveObjectProperties<T extends AnyObject, Properties extends keyof T> = {
  [Key in Exclude<keyof T, Properties>]: T[Key];
};
