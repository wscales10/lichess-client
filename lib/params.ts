export function params(options: { [key: string]: unknown }) {
  const stringOptions: { [key: string]: string } = {};

  for (let [key, value] of Object.entries(options)) {
    stringOptions[key] = `${value}`;
  }

  return new URLSearchParams(stringOptions);
}
