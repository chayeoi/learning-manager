/** @jsx jsx */
import { Global } from '@emotion/core'
import { jsx, ThemeProvider } from 'theme-ui'

import { GlobalProvider } from '@/components'
import { global, theme } from '@/styles'

const App: React.FC = () => (
  <GlobalProvider>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <h1
        sx={{
          fontSize: 32,
          fontWeight: 700,
        }}
      >
        학습 관리 대시보드
      </h1>
    </ThemeProvider>
  </GlobalProvider>
)

export default App
