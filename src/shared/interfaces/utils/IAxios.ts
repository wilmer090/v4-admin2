export interface IAxios<P, B> {
  url: string;
  params?: P;
  body?: B;
}
