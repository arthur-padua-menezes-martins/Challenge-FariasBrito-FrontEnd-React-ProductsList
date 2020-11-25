import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from '@/presentation/pages/App/App'
import GlobalStyle, { theme } from '@/presentation/style/global'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </>,
  document.getElementById('app')
)
