import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'

function App () {
  const [gifs, setGifs] = useState([])
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

  useEffect(() => {
    const fetchGifs = async () => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=0&rating=g&bundle=messaging_non_clips`)
      const results = await response.json()
      setGifs(results.data)
    }
    fetchGifs()
  }, [])

  const sendSearch = async (searchTerm) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
    const results = await response.json()
    setGifs(results.data)
  }

  return (
    <div className='App'>
      <SearchBar handleSearch={sendSearch} />
      <div className='grid-cards'>
        {gifs.map((gif) => (
          <ImageCard
            key={gif.id}
            url={gif.images.fixed_height.url}
            title={gif.title}
          />
        ))}
      </div>

    </div>
  )
}

export default App
