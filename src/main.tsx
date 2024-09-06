import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'

import Home from './pages/Home';
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
