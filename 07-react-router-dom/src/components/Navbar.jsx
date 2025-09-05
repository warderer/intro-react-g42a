import { NavLink } from 'react-router-dom'

const Navbar = ({ estoyLoggeado, onLogin, onLogout }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Personajes</NavLink>
        </li>
        {
          estoyLoggeado && (
            <li>
              <NavLink to='/secret'>Secret</NavLink>
            </li>
          )
        }
      </ul>

      <div className='auth-buttons'>
        {estoyLoggeado
          ? (
            <button onClick={onLogout} className='btn btn-link'>Logout</button>
            )
          : (
            <button onClick={onLogin} className='btn btn-link'>Login</button>
            )}
      </div>
    </nav>
  )
}

export default Navbar
