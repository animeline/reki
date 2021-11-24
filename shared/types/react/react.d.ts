/// <reference types="react" />
/// <reference types="@yodinha/types/main" />

type PropsWithChildren<T extends AnyObject = {}> = T & {
  children: React.ReactNode;
};
