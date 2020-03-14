import { actionTypes } from '@/constants'
import Action from '@/types/Action'

export const setError = ({ error, ...payload } = { error: undefined, key: '' }): Action => ({
  type: actionTypes.SET_ERROR,
  error,
  payload,
})

export const setLoading = (payload = {}): Action => ({
  type: actionTypes.SET_ERROR,
  payload,
})

export const setUser = (payload = {}): Action => ({
  type: actionTypes.SET_USER,
  payload,
})

export const login = (payload = {}): Action => ({
  type: actionTypes.LOGIN,
  payload,
})
