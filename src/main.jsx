import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScreenSize from '@/components/ScreenSize.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSize />
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
