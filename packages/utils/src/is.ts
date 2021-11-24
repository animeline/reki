export function isNumber(value: any): value is number {
  return (
    !isUndefined(value) && !Number.isNaN(value) && typeof value === 'number'
  );
}

export function isObject<T extends AnyObject = AnyObject>(
  value: any,
): value is T {
  return value && value.constructor === Object;
}

export function isUndefined(value: any): value is undefined {
  return value === undefined || typeof value === 'undefined';
}

export function isUndefinedOrNull(value: any): value is undefined | null {
  return value === null || isUndefined(value);
}
