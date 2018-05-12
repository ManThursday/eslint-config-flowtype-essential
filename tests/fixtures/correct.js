// @flow

type Client<T> = {
  name: string,
  surname: string,
  age: number | string,
  isRegular: boolean,
  reference: T
}

// eslint-disable-next-line no-unused-vars
function greetClient (client: Client<string>): string {
  return `Hi, ${client.name}-{$client.reference}`
}
