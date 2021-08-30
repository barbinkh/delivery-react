export interface BasePaginationResponse<T> {
    count: number,
    next?: number,
    previous?: number,
    results: Array<T>,
}