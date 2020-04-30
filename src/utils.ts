export interface CurriedFunction2<T1, T2, R> {
  (t1: T1): (t2: T2) => R
  (t1: T1, t2: T2): R
}
