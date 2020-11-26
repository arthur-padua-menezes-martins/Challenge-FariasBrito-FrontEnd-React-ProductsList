export interface IHttpResponseBodyProductsList {
  id: number
  name: string
  description: string
  price: string
}

export interface IHttpResponseBody {
  productsList: [IHttpResponseBodyProductsList]
}

export interface IHttpResponse<T> {
  statusCode: number
  body?: T
}
