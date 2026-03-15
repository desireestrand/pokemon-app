# Pokémon 151 Explorer

A dynamic React-based explorer built to showcase the original 151 Pokémon species. This application guides users through a multi-stage interface where data is fetched from the PokéAPI and displayed on demand with a custom visual identity for each Pokémon.

[Live Demo](https://desireestrand.github.io/pokemon-app/)

---

### Features
* **Multi-stage Flow:** A landing screen with a “Start Pokémon App” button that transitions into the main application state upon user interaction.
* **On-demand Data Fetching:** While the application fetches all 151 Pokémon on load, a dropdown system with all 151 Pokémon names allows users to select a Pokémon, triggering further specific API calls to retrieve detailed data.
* **Dynamic Stats Display:** Visualizes essential Pokémon data such as name, image, elemental types, weight, and height.
* **Type-Based UI:** A unique theme for every Pokémon, where the UI colors adapt based on the creature's primary elemental type.
 
### Technical Implementation
The React application is built using a modular hierarchy (App, PokemonApplication, and Pokemon) to ensure a clean separation of concerns.
* **Dynamic Styling Engine:** I implemented a 'typeColors' map that links Pokémon types to specific hex codes. A useEffect hook synchronizes the UI colors to match the selected Pokémon's type, creating an immersive experience.
* **Asynchronous Data Handling:** Used the Fetch API with async/await. By separating the initial list fetch from the specific Pokémon details, I ensured the application remains performant and only fetches deep-linked data when necessary.
* **Conditional Rendering:** Implemented logic to ensure components only render once the necessary data is fully available, preventing errors and layout shifts.

### Tech Stack
* **Frontend:** React, JavaScript (ES6+), CSS3
* **API:** [PokéAPI](https://pokeapi.co/api/v2/pokemon?limit=151)
* **Build Tool:** Vite

### Installation & Setup
1. Clone the repository:
   ```bash
   
    git clone https://github.com/desireestrand/pokemon-app.git

2. Install dependencies:
    ```bash
    
    npm install

3. Start the development server:
    ```bash
    
    npm run dev

Developed by Desirée Strand.
