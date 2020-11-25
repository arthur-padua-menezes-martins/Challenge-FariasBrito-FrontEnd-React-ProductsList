import {
  IHttpResponse
} from '@/data/protocols/http/response/http-response'

export interface ISearchParams {
  url: string
  method?: string
  headers?: any
}

export interface ISearch<T> {
  search: (params: ISearchParams) => Promise<IHttpResponse<T>>
}
