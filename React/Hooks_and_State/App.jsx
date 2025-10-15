import React, { useState } from 'react'

function App() {
  const [goal, setGoal] = useState(15)

  const addValue = () => {
    setGoal(goal + 1)
  }

  const removeValue = () => {
    setGoal(goal - 1)
  }

  return (
    <>
      <h1>Player name: Messi with goal {goal}</h1>
      <h2>Goal value: {goal}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>

      <p>Footer: {goal}</p>
    </>
  )
}

export default App
