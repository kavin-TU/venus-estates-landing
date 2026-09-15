/** Conditionally join class names. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

/** Strip leading slash for react-router path segments. */
export function toRoutePath(path: string) {
  return path.replace(/^\//, '')
}
