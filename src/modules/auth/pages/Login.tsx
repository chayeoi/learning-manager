import * as firebase from 'firebase/app'
import React from 'react'
import { Container } from 'theme-ui'

import { useDispatch } from '@/hooks'

import { Layout } from '../components'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = async (): Promise<void> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()

      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      dispatch({ type: '', error })
    }
  }

  return (
    <Layout>
      <Container
        p={4}
      >
        <button type="button" onClick={handleClick}>Google 계정으로 로그인</button>
      </Container>
    </Layout>
  )
}

export default Login
