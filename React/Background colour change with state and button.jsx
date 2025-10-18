import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className="w-full h-screen transition-colors duration-500 flex items-end justify-center pb-12">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button
          onClick={() => setColor('black')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'black' }}
        >
          Black
        </button>

        <button
          onClick={() => setColor('white')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black border"
          style={{ backgroundColor: 'white' }}
        >
          White
        </button>

      </div>
    </div>
  )
}

export default App
