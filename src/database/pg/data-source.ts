/**
 * Contract for all data sources.
 */

export interface DataSource<T> {
  findUnique: (id: number) => Promise<T>
}
