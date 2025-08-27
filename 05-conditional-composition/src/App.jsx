import { useState } from 'react'
import './App.css'
import Widget from './components/Widget/Widget'

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
          ? (
            <Widget title='Perfil de Usuario'>
              <p><strong>Usuario:</strong> César Guerra</p>
              <p><strong>Rol:</strong> Administrador</p>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </Widget>
            )
          : (
            <Widget title='Iniciar Sesión'>
              <p>Por favor, inicia sesión para acceder a tu cuenta.</p>
              <button onClick={handleLogin}>Iniciar Sesión</button>
            </Widget>
            )
      }

    </div>
  )
}

export default App
