import { useState } from 'react'
import './App.css'

function App () {
  // Estado para saber si el usuario ha iniciado sesión o no
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Funciones para SIMULAR el inicio y cierre de sesión
  const handleLogin = () => setIsLoggedIn(true)

  const handleLogout = () => setIsLoggedIn(false)

  return (
    <div className='container'>
      <h1>Mi Panel de Control</h1>

      {/* --- RENDERIZADO CONDICIONAL CON OP. TERNARIO --- */}
      {
        isLoggedIn
          ? <button onClick={handleLogout}>Cerrar Sesión</button>
          : <button onClick={handleLogin}>Iniciar Sesión</button>
      }

    </div>
  )
}

export default App
