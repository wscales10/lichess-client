import { Account } from "./lib/account";
import { Client } from "./lib/client";
import { Games } from "./lib/games";
import { Users } from "./lib/users";

export default class Lichess {
  readonly account: Account;
  readonly games: Games;
  readonly users: Users;

  constructor(token?: string) {
    const client = new Client(token);
    this.account = new Account(client);
    this.games = new Games(client);
    this.users = new Users(client);
  }
}
