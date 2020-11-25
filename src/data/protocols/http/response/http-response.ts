export interface IHttpResponseBody {
  productsList: [{
    id: number
    name: string
    description: string
    price: string
  }]
}

export interface IHttpResponse<T> {
  statusCode: number
  body?: T
}
