import User from './User'

export default interface State {
  user: User | null;
  error: { [key: string]: Error };
  loading: { [key: string]: boolean };
}
