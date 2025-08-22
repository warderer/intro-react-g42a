import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  // Estado para guardar lo que se escribe en el input
  const [search, setSearch] = useState('')

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className='search-button'
        onClick={() => handleSearch(search)}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
