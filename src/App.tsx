/** @jsx jsx */
import { Global } from '@emotion/core'
import { jsx, ThemeProvider } from 'theme-ui'

import { global, theme } from './styles'

const App: React.FC = () => (
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
)

export default App
