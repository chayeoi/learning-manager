import State from '@/types/State'

export const initialState: State = {
  user: null,
  error: null,
  loading: false,
}

// eslint-disable-next-line
const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export default reducer
