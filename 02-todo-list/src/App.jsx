import { useState } from 'react' /* 1.Importar useState */
import './App.css'
import ToDoItem from './components/ToDoItem'

function App () {
  /* 1. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 4. Creo un nuevo estado para manejar la lista de tareas */
  const [tasks, setTasks] = useState([])

  /* 3. Creo una función que se ejecuta cuando se hace clic a agregar */
  /* 5. Modifico la función para agregar tareas a la lista */
  const handleAdd = () => {
    // console.log('Añadir tarea:', inputValue)
    setTasks([...tasks, inputValue])
    setInputValue('') /* Limpio el input después de añadir la tarea */
  }

  /* 6. Creo una función para eliminar una tarea del arreglo de tasks */
  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex))
  }

  return (
    <>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)} /* 2. Actualizo el estado con el valor del input */
      />
      <button onClick={handleAdd}>Añadir</button>

      {/* ul>li{Item $}*3>button{Eliminar} */}
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            todoName={task}
            handleDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </>
  )
}

export default App
