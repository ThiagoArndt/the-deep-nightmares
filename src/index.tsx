import React from 'react'
import ReactDOM from 'react-dom/client'
import * as firebase from 'firebase/app'
import { firebaseConfig } from './utils/firebaseConfig'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
firebase.initializeApp(firebaseConfig)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
