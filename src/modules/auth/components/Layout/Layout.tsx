/** @jsx jsx */
import { jsx } from 'theme-ui'

const Layout: React.FC = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: (theme): string => theme.colors.muted,
    }}
  >
    <header
      sx={{
        px: 3,
        py: 3,
        bg: (theme): string => theme.colors.background,
      }}
    >
      <h1
        sx={{
          variant: 'variants.h1',
        }}
      >
        학습 매니저
      </h1>
    </header>
    <main sx={{ flexGrow: 1 }}>
      {children}
    </main>
  </div>
)

export default Layout
