export interface IClient {
  name: string;
  parent: string;
}

export interface IClientRequestPayload {
  name?: string;
  parent?: string;
}
