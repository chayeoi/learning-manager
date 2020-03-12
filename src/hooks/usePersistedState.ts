import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react'

const usePersistedState = <S>(key: string, defaultValue: S): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(
    () => JSON.parse(localStorage.getItem(key) as string) || defaultValue,
  )
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
