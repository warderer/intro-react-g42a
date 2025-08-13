import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App saludo='Hola' title='G42A, soy un Prop' />
    <App saludo='Hi' title='G42A, im a Prop' />
  </StrictMode>,
)
