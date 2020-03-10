export default interface Action {
  // eslint-disable-next-line
  payload?: any;
  type: string;
  error?: Error | null;
}
