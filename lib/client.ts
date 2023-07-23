import fetch, { BodyInit, HeadersInit, RequestInit } from "node-fetch";

export class Client {
  private readonly baseUrl: string;
  private readonly headers: HeadersInit;

  constructor(token?: string) {
    this.headers = token ? { Authorization: `Bearer ${token}` } : {};
    this.baseUrl = "https://lichess.org";
  }

  get(path: string, headers: HeadersInit = {}, options?: URLSearchParams) {
    return this.request("GET", path, headers, null, options);
  }

  post(
    path: string,
    headers: HeadersInit,
    body: BodyInit | null,
    options?: URLSearchParams
  ) {
    return this.request("POST", path, headers, body, options);
  }

  private request(
    method: string,
    path: string,
    headers: HeadersInit = {},
    body: BodyInit | null,
    options?: URLSearchParams
  ) {
    const uri = `${this.baseUrl}/${path}${options}`;
    const requestHeaders = Object.assign({}, this.headers, headers);

    const requestOptions: RequestInit = {
      method: method,
      headers: requestHeaders,
    };

    if (method == "POST" && body) requestOptions.body = body;

    return fetch(uri, requestOptions);
  }
}
