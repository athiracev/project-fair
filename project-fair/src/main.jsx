import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapis from './Context_Api/Contextapis.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Contextapis>
    <App />
    </Contextapis>
    </BrowserRouter>
  </React.StrictMode>,
)
