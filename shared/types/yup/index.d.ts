/// <reference types="@reki/types/main" />

/* eslint-disable import/order, import/no-self-import */

import type { TypeOfShape, OptionalObjectSchema } from 'yup/lib/object';
import type {
  ArraySchema,
  DateSchema,
  ObjectSchema,
  NumberSchema,
  StringSchema,
} from 'yup';

declare module 'yup' {
  type YupMaybe<T> = T | null | undefined;

  type GetYupSchema<T> = T extends number
    ? NumberSchema<YupMaybe<T>>
    : T extends string
    ? StringSchema<YupMaybe<T>>
    : T extends Date
    ? DateSchema<YupMaybe<T>>
    : T extends Array<infer E>
    ? ArraySchema<GetYupSchema<E>>
    : T extends AnyObject
    ? YupObjectSchema<T>
    : never;

  type YupObjectSchemaType<T extends AnyObject> = {
    [Key in keyof T]-?: GetYupSchema<T[Key]>;
  };

  type YupObjectSchema<T extends AnyObject> = IsNullable<T> extends true
    ?
        | ObjectSchema<
            YupObjectSchemaType<T>,
            AnyObject,
            TypeOfShape<YupObjectSchemaType<T>> | null
          >
        | OptionalObjectSchema<YupObjectSchemaType<T>>
    : ObjectSchema<YupObjectSchemaType<T>>;
}
