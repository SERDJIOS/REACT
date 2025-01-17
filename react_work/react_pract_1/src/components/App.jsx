import CarList from "./CarList"

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" },
  ];
  return (
    <>
    <div>
      <CarList />
    </div>
    </>
  )
}

export default App
