/// <reference types="react" />
/// <reference types="@animeline/types/main" />

type PropsWithChildren<T extends AnyObject = {}> = T & {
  children: React.ReactNode;
};

type ElementTags = keyof JSX.IntrinsicElements;

type AcceptedLegacyType = ElementTags | ComponentType<any>;

type ComponentType<P = any> =
  | ((props: P) => React.ReactElement<any, any> | null)
  | ((props: P, ref: React.Ref<any>) => React.ReactElement<any, any> | null);

type ElementsType = {
  [Tag in keyof JSX.IntrinsicElements]: GetElementProps<
    JSX.IntrinsicElements[Tag]
  >;
};

type GetElementByTag<Tag extends ElementTags> = ElementsType[Tag];

type GetTagProps<T> = T extends ElementTags ? ElementsType[T] : never;

type GetComponentProps<T> = T extends ComponentType<infer P> ? P : never;

type GetElementProps<T extends ValueOf<JSX.IntrinsicElements>> =
  T extends React.DetailedHTMLProps<infer P, any>
    ? P
    : T extends React.SVGProps<infer P>
    ? React.SVGProps<P>
    : never;

type GetComponentOrElementProps<E> = E extends ComponentType<infer P>
  ? P
  : E extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[E]
  : never;

type MakePolymorphicComponentProps<
  Tag extends ElementTags,
  Props extends AnyObject,
  T extends AcceptedLegacyType,
> = {
  as?: T;
} & ElementsType[Tag] &
  GetComponentOrElementProps<T> &
  Props;

interface PolymorphicComponent<
  Tag extends ElementTags,
  Props extends AnyObject = {},
> {
  <T extends AcceptedLegacyType>(
    props: MakePolymorphicComponentProps<Tag, Props, T>,
  ): React.ReactElement<any, any> | null;
}

type HTMLInputTypeAttribute =
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
        | (string & {});
