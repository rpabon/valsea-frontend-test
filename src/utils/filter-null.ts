export function filterNull<T>(item: T): item is Exclude<T, null | undefined> {
  return Boolean(item);
}
