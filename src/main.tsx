import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardList } from './CardList'
import './index.css'
import 'tachyons'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>,
)
