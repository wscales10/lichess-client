import { Client } from "./client";
import { params } from "./params";
import { NdjsonParser } from "./ndjson-parser";

export class Users {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async activityByUsername(username: string) {
    const path = `api/user/${username}/activity`;
    const headers = {
      Accept: "application/json",
    };

    const res = await this._client.get(path, headers);
    return await res.json();
  }

  async get(username: string) {
    const path = `api/user/${username}`;
    const headers = {
      Accept: "application/json",
    };

    const res = await this._client.get(path, headers);
    return await res.json();
  }

  async listByTeamId(teamId: string) {
    const path = `team/${teamId}/users`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const res = await this._client.get(path, headers);
    const users = await res.text();
    return users === "" ? [] : NdjsonParser.parse(users);
  }

  async listByUsernames(usernames: readonly string[]) {
    const path = "api/users";
    const headers = {
      Accept: "application/json",
    };
    const usernameString = usernames.join(",");

    const res = await this._client.post(path, headers, usernameString);
    return await res.json();
  }

  async liveStreams() {
    const path = "streamer/live";
    const headers = {
      Accept: "application/json",
    };

    const res = await this._client.get(path, headers);
    return await res.json();
  }

  async statusesByUsernames(usernames: readonly string[]) {
    const path = `api/users/status`;
    const usernameString = usernames.join(",");
    const headers = {
      Accept: "application/json",
    };

    const res = await this._client.get(
      path,
      headers,
      params({ ids: usernameString })
    );
    return await res.json();
  }
}
