export default function throwOnError<T>(res: T & { error?: string }) {
  if (res.error) {
    throw res.error;
  }

  return res;
}
