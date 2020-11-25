import {
  IHttpResponse
} from '@/data/protocols/http/response/http-response'

export interface IHttpClientParams {
  url: string
  method?: string
  headers?: any
}

export interface IHttpClient<T> {
  search: (requestParams: IHttpClientParams) => Promise<IHttpResponse<T>>
}
