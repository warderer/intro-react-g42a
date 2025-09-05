import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import CharacterDetail from '../pages/CharacterDetail'
import NotFound from '../pages/NotFound'
import Secret from '../pages/Secret'
import RequireAuth from '../auth/RequireAuth'

const AppRoutes = ({ estoyLoggeado }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:id' element={<CharacterDetail />} />

      {/* Ruta Protegida */}
      <Route
        path='/secret'
        element={
          <RequireAuth isAuth={estoyLoggeado}>
            <Secret />
          </RequireAuth>
        }
      />

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes
