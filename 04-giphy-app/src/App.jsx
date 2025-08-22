import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'

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

  return (
    <div className='App'>
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
