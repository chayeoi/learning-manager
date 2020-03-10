import State from '@/types/State'

export const initialState: State = {
}

// eslint-disable-next-line
const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
