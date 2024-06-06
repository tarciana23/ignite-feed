import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'

//Erro ts: Esse elemento pode não existir, solução nesse caso !
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
