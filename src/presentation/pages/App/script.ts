import {
  IHttpResponse, IHttpResponseBody
} from '@/data/protocols/http/response/http-response'
import {
  RemoteSearch
} from '@/data/usecases/http/remote/remote-search'
import {
  ISearchParams
} from '@/data/protocols/search/search'

export class AppController {
  constructor (
    private readonly remoteSearch: RemoteSearch
  ) {}

  async search (searchParams: ISearchParams): Promise<IHttpResponse<IHttpResponseBody> | null> {
    let httpResponse: IHttpResponse<IHttpResponseBody> | null = null

    try {
      httpResponse = await this.remoteSearch.search(searchParams)
      console.log('App httpResponse: ', httpResponse)
    } catch (error) {}

    return httpResponse
  }
}
