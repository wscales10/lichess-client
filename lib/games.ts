import { Client } from "./client";
import { params } from "./params";
import { NdjsonParser } from "./ndjson-parser";

export class Games {
  private readonly client: Client;
  
  constructor(client: Client) {
    this.client = client;
  }

  current(maxGames?: number) {
    const path = "api/account/playing";

    const options = maxGames ? params({ nb: maxGames }) : undefined;
    return this.client.get(path, {}, options);
  }

  currentTv() {
    const path = "tv/channels";

    return this.client.get(path);
  }

  async get(gameId: string, options = {}) {
    const path = `game/export/${gameId}`;

    const headers = {
      Accept: "application/json",
    };

    const res = await this.client.get(path, headers, params(options));
    return await res.json();
  }

  async listByIds(ids: readonly string[], options = {}) {
    const idString = ids.join(",");
    const path = "games/export/_ids";

    const headers = {
      Accept: "application/x-ndjson",
    };

    const res = await this.client.post(
      path,
      headers,
      idString,
      params(options)
    );
    const games = await res.text();
    return games === "" ? [] : NdjsonParser.parse(games);
  }

  async listByUser(username: string, options = {}) {
    const path = `api/games/user/${username}`;

    const headers = {
      Accept: "application/x-ndjson",
    };

    const res = await this.client.get(path, headers, params(options));
    const games = await res.text();
    return games === "" ? [] : NdjsonParser.parse(games);
  }
}
