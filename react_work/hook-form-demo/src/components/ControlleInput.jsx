import { useState } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdateProgrammatically = () => {
    setInputValue('Новое значение'); // Пытаемся программно изменить значение
  };

  const handleReset = () => {
    setInputValue('');
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange} // value не указано
      />
      <button onClick={handleUpdateProgrammatically}>
        Обновить программно
      </button>
      <button onClick={handleReset}>
        Сбросить
      </button>
      <p>Текущее значение: {inputValue}</p>
    </div>
  )
}

export default ControlledInput