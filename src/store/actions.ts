import Action from '@/types/Action'

export const SET_USER = 'SET_USER'

export const setUser = (payload = {}): Action => ({
  type: SET_USER,
  payload,
})
