import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from '@/presentation/pages/App/App'
import store from '@/redux/store/store'
import GlobalStyle, { theme } from '@/presentation/style/global'

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App/>
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('app')
)
