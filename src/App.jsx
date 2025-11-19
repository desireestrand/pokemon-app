import { useState } from 'react';
import PokemonApplication from './components/PokemonApplication';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      <header>
        <h1>˚.• Pokémon 151 •˚.</h1>
      </header>
      
      {!started ? (
        <div className="start-button">
          <button onClick={() => setStarted(true)}>► Start Pokémon App</button>
        </div>
      ) : (
        <PokemonApplication/>
      )}
    </div>
  )
}

export default App;
