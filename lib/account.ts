import { Client } from "./client";
import { params } from "./params";

export class Account {
  private readonly client: Client;
  
  constructor(client: Client) {
    this.client = client;
  }

  async account() {
    const path = "api/account";
    const headers = {
      Accept: "application/json",
    };

    const res = await this.client.get(path, headers);
    return await res.json();
  }

  async email() {
    const path = "api/account/email";
    const headers = {
      Accept: "application/json",
    };

    const res = await this.client.get(path, headers);
    return await res.json();
  }

  async preferences() {
    const path = "api/account/preferences";
    const headers = {
      Accept: "application/json",
    };

    const res = await this.client.get(path, headers);
    return await res.json();
  }

  async kid() {
    const path = "api/account/kid";
    const headers = {
      Accept: "application/json",
    };

    const res = await this.client.get(path, headers);
    return await res.json();
  }

  async kidOn() {
    const path = "api/account/kid";
    const headers = {
      Accept: "application/json",
    };
    const options = params({ v: true });

    const res = await this.client.post(path, headers, null, options);
    return await res.json();
  }

  async kidOff() {
    const path = "api/account/kid";
    const headers = {
      Accept: "application/json",
    };

    const options = params({ v: false });

    const res = await this.client.post(path, headers, null, options);
    return await res.json();
  }
}
