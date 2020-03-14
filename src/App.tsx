/** @jsx jsx */
import { Global } from '@emotion/core'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import { jsx, ThemeProvider } from 'theme-ui'

import {
  AuthProvider, GlobalProvider, PrivateRoute, PublicRoute,
} from '@/components'
import { routes } from '@/constants'
import { Login } from '@/modules/auth/pages'
import { Dashboard } from '@/modules/dashboard/pages'
import { global, theme } from '@/styles'

const App: React.FC = () => (
  <GlobalProvider>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} />
            <PublicRoute exact path={routes.LOGIN} component={Login} />
            <Redirect from={routes.ROOT} to={routes.DASHBOARD} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </GlobalProvider>
)

export default App
