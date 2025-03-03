import React, { useState } from 'react';
import './App.css';           
import ValueDisplay from './Value';

function App() {
  
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст..."
      />

      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
