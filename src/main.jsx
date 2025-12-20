import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext' // <-- Importante

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* <-- Aquí envolvemos la App */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)