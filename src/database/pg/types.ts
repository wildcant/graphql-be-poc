/**
 * Contract for all data sources.
 */

export interface PgDataSource<T> {
  findUnique: (id: number) => Promise<T>
  findMany: (ids: number[]) => Promise<Array<T | Error>>
}
