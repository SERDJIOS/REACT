import { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  // Обработчик удаления человека из списка
  const handleDelete = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Список приглашенных</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {people.map(person => (
          <li
            key={person.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              background: '#f2f2f2',
            }}
          >
            <span>
              {person.name}, {person.age} лет
            </span>
            <button
              onClick={() => handleDelete(person.id)}
              style={{
                background: '#ff4d4f',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {people.length === 0 && <p>Список пуст</p>}
    </div>
  );
};


export default List;