import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-amber-100' >I am Shafin Mahmood</h1>
    <Card user ="Shafin"/>
    <Card user = "Messi"/>

    </>
  )
}

export default App
