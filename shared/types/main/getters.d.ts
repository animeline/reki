type GetArrayType<T> = T extends Array<infer V> ? V : never;
