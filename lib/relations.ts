import { Client } from "./client";
import { NdjsonParser } from "./ndjson-parser";

export class Relations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async followers(username: string) {
    const path = `api/user/${username}/followers`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const res = await this._client.get(path, headers);
    const relations = await res.text();
    return relations === "" ? [] : NdjsonParser.parse(relations);
  }

  async following(username: string) {
    const path = `api/user/${username}/following`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const res = await this._client.get(path, headers);
    const relations = await res.text();
    return relations === "" ? [] : NdjsonParser.parse(relations);
  }
}
