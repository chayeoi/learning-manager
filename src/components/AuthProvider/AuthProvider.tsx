import * as firebase from 'firebase/app'
import React, { useEffect } from 'react'

import { useDispatch } from '@/hooks'
import * as actions from '@/store/actions'

// eslint-disable-next-line
// @ts-ignore
const AuthProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(actions.setUser({
        user: user
          ? {
            displayName: user.displayName,
            uid: user.uid,
            photoURL: user.photoURL,
            email: user.email,
          }
          : null,
      }))
    })

    return (): void => {
      unsubscribe()
    }
  }, [dispatch])

  return children
}

export default AuthProvider
