export interface InfoType {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

export interface Response<T> {
  info: InfoType;
  results: Array<T>;
}
