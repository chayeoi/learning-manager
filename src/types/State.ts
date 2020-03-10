import User from './User'

export default interface State {
  user: User | null;
  error: Error | null;
  loading: boolean;
}
