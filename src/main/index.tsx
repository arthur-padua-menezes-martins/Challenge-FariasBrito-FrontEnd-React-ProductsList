import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/presentation/pages/App/App'
import GlobalStyle from '@/presentation/style/global'

ReactDOM.render(
  <>
    <App/>
    <GlobalStyle/>
  </>,
  document.getElementById('app')
)
