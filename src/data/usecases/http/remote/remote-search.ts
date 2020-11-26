import {
  IHttpResponse, ISearch, ISearchParams, IHttpClient
} from './remote-search-protocols'

export class RemoteSearch implements ISearch<any> {
  constructor (private readonly httpClient: IHttpClient<IHttpResponse<any>>) {}

  public async search (params: ISearchParams): Promise<IHttpResponse<any>> {
    const httpResponse = await this.httpClient.search(params)

    return {
      statusCode: httpResponse.statusCode,
      body: {
        productsList: httpResponse.body
      }
    }
  }
}
