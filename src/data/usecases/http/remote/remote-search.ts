import {
  IHttpResponse, ISearch, ISearchParams, IHttpClient
} from './remote-search-protocols'

export class RemoteSearch implements ISearch<any> {
  constructor (private readonly httpClient: IHttpClient<IHttpResponse<any>>) {}

  async search (params: ISearchParams): Promise<IHttpResponse<any>> {
    const httpResponse = await this.httpClient.search(params)

    return httpResponse
  }
}
