export default function CitySelector({ cities, onCityChange }) {
    return (
      <div>
        <h2>Выберите город:</h2>
        <select onChange={(e) => onCityChange(e.target.value)}>
          <option value="">Выберите город</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  }