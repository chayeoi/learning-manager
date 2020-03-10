const theme = {
  breakpoints: ['600px', '960px', '1280px', '1920px'],
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#2188ff',
    secondary: '#8a63d2',
    muted: '#f6f6f6',
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  sizes: [],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  useColorSchemeMediaQuery: true,
  variants: {
    h1: {
      color: 'primary',
      fontSize: [5, 6, 7],
      fontWeight: 'heading',
    },
  },
}

export default theme
