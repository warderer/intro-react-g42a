import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const listaDeUsuarios = [
    { id: 1, nombre: 'Luis', pais: 'México' },
    { id: 2, nombre: 'Ana', pais: 'España' },
    { id: 3, nombre: 'Carlos', pais: 'Argentina' },
    { id: 4, nombre: 'María', pais: 'Colombia' },
    { id: 5, nombre: 'Pedro', pais: 'Chile' },
    { id: 6, nombre: 'Sofia', pais: 'Perú' },
    { id: 7, nombre: 'Diego', pais: 'Uruguay' },
    { id: 8, nombre: 'Carmen', pais: 'Venezuela' },
    { id: 9, nombre: 'Roberto', pais: 'Ecuador' },
    { id: 10, nombre: 'Isabella', pais: 'Costa Rica' }
  ]

  // Crear los estaods para manejar: usuarios, busqueda, la carga y el tema.
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(false)
  const [tema, setTema] = useState('light')

  // Función que simula una lladada a la API para cargar usuarios.
  const fetchUsuarios = () => {
    return new Promise((resolve) => {
      console.log('Cargando usuarios...')
      setTimeout(() => {
        resolve(listaDeUsuarios)
      }, 2500)
    })
  }

  // useEffect: Lo usamos para cargar los datos (en este caso los usuarios) al iniciar el componente.
  useEffect(() => {
    setCargando(true)
    fetchUsuarios().then((usuarios) => {
      setUsuarios(usuarios)
      setCargando(false)
    })
  }, [])

  return <h1>Hello World</h1>
}

export default App
