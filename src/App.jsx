import { useState } from 'react';
import PokemonApplication from './components/PokemonApplication';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      <header>
        <h1 id="h1"><span>˚.•</span> Pokémon 151 <span>•˚.</span></h1>
      </header>
      
      {!started ? (
        <div className="start-button">
          <button onClick={() => setStarted(true)}>► Start Pokémon App</button>
        </div>
      ) : (
        <PokemonApplication/>
      )}

      <footer>Made with ♥ in React. 2025 © Desirée Strand.</footer>
    </div>
  )
}

export default App;
