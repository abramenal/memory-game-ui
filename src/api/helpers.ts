// eslint-disable-next-line import/prefer-default-export
export function throwOnError<T>(res: T & { error: string }) {
  if (res.error) {
    throw res.error;
  }

  return res;
}
