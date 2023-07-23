export class NdjsonParser {
  static parse(body: string) {
    return body
      .trim()
      .split(/\n/)
      .map((line) => JSON.parse(line));
  }
}
