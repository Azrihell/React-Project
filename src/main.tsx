import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './Hello.tsx'
import './index.css'
import 'tachyons'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
)
