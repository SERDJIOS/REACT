 export default function CityCard({ city }) {
    if (!city) {
      return <p>Выберите город, чтобы увидеть информацию.</p>;
    }
  
    return (
      <div className="city-card">
        <h2>{city.name}</h2>
        <img src={city.imageUrl} alt={city.name} width="300" />
        <p>{city.description}</p>
        <ul>
          {city.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    );
  }