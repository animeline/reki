type Nullable<T> = T | null;

type AnyThing<T> = T | Promise<T>;

type PromiseType<T> = T extends Promise<infer R> ? R : T;

type ValueOf<T> = T[keyof T];

type RemoveNotUndefinedValues<V> = V extends undefined ? V : never;
