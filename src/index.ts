type Log = (l: string) => string
export const log: Log = (l) => {
  console.log(l)
  return l
}
