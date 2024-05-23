import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.ts'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme }>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
)
