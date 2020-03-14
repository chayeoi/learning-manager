import * as firebase from 'firebase/app'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'theme-ui'

import { routes } from '@/constants'
import { useDispatch } from '@/hooks'
import * as actions from '@/store/actions'

import { Layout } from '../components'

interface Props {
  location: {
    state?: {
      from: {
        pathname: string;
        hash?: string;
        search?: string;
        key?: string;
      };
    };
  };
}

const Login: React.FC<Props> = ({ location }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  const dispatch = useDispatch()

  const { from } = location.state || { from: { pathname: routes.ROOT } }

  const handleClick = async (): Promise<void> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()

      await firebase.auth().signInWithPopup(provider)

      setRedirectToReferrer(true)
    } catch (error) {
      dispatch(actions.setError({ key: actions.LOGIN, error }))
    }
  }

  return redirectToReferrer
    ? <Redirect to={from} />
    : (
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
