import {
  IHttpResponse, IHttpResponseBody
} from '@/data/protocols/http/response/http-response'
import {
  RemoteSearch
} from '@/data/usecases/http/remote/remote-search'
import {
  ISearchParams
} from '@/data/protocols/search/search'

export { RemoteSearch } from '@/data/usecases/http/remote/remote-search'
export { FeatchHttpClient } from '@/infra/http/client/fetch/fetch-http-client'
export class AppController {
  constructor (
    private readonly remoteSearch: RemoteSearch
  ) {}

  public async search (searchParams: ISearchParams): Promise<IHttpResponse<IHttpResponseBody> | null> {
    let httpResponse: IHttpResponse<IHttpResponseBody> | null = null

    try {
      httpResponse = await this.remoteSearch.search(searchParams)
    } catch (error) {}

    return httpResponse
  }
}
