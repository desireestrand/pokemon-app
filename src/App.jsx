import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <>
      <h1>Pokémon Application</h1>
      {!started ? 
        (<button onClick={() => setStarted(true)}>Start Pokémon App</button>) 
        : <PokemonApplication/>}
    </>
  )
}

export default App
