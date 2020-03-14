import produce from 'immer'

import { actionTypes } from '@/constants'
import State from '@/types/State'

export const initialState: State = {
  user: null,
  error: {},
  loading: { [actionTypes.SET_USER]: true },
}

// eslint-disable-next-line
const reducer = (state: State = initialState, action: any): State => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      draft.error[action.payload.key] = action.error
      draft.loading[action.payload.key] = false
      break
    case actionTypes.SET_LOADING:
      draft.loading[action.payload.key] = true
      break
    case actionTypes.SET_USER:
      draft.user = action.payload.user
      draft.loading[actionTypes.SET_USER] = false
      break
    default:
  }
})

export default reducer
