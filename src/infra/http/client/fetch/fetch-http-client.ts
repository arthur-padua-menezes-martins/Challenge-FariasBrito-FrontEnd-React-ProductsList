import {
  IHttpResponse, IHttpClient, IHttpClientParams
} from './fetch-http-client-protocols'

export class FeatchHttpClient implements IHttpClient<any> {
  async search (requestParams: IHttpClientParams): Promise<IHttpResponse<any>> {
    const { url, ...init } = requestParams

    const httpResponse = await fetch(url, init)
    const { status } = httpResponse

    return {
      statusCode: status,
      body: await (await httpResponse.json())
    }
  }
}
