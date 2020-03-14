import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

import { Spinner } from '@/components'
import { actionTypes, routes } from '@/constants'
import { useSelector } from '@/hooks'
import State from '@/types/State'
import User from '@/types/User'

interface Props {
  // eslint-disable-next-line
  component: any;
  exact?: boolean;
  path?: string;
}

const PublicRoute: React.FC<Props> = ({ component: Component, ...otherProps }) => {
  const user = useSelector((state: State): User | null => state.user)
  const loading = useSelector((state: State): boolean => state.loading[actionTypes.SET_USER])

  const location = useLocation()

  const isAuthenticated = Boolean(user)

  return (
    <Route
      {...otherProps}
      render={(props): React.ReactElement => {
        if (loading) {
          return <Spinner />
        }

        return (
          isAuthenticated
            ? <Redirect to={{ pathname: routes.ORGANIZATIONS, state: { from: location } }} />
            : <Component {...props} />
        )
      }}
    />
  )
}

export default PublicRoute
