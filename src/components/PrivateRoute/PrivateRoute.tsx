import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useSelector } from '@/hooks'
import State from '@/types/State'
import User from '@/types/User'

interface Props {
  // eslint-disable-next-line
  component: any;
  exact?: boolean;
  path?: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...otherProps }) => {
  const user = useSelector((state: State): User | null => state.user)

  const isAuthenticated = Boolean(user)

  return (
    <Route
      {...otherProps}
      render={(props): React.ReactElement => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  )
}

export default PrivateRoute