import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css'; 
import { 
  Button,
  List,
  Input,
  InputGroup,
  IconButton
} from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';

function App() {
  const [items, setItems] = useState([]);     // Список элементов
  const [newItem, setNewItem] = useState(''); // Текущее значение поля ввода

  // Добавление нового элемента
  const handleAddItem = () => {
    // Если поле ввода пустое, не добавляем
    if (!newItem.trim()) return;
    setItems([...items, newItem]);
    setNewItem(''); // Очищаем поле
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20 }}>
      <h2>React Suite Demo</h2>

      {/* Группа ввода (InputGroup): поле ввода + кнопка */}
      <InputGroup inside style={{ marginBottom: 20 }}>
        <Input
          placeholder="Введите новый элемент..."
          value={newItem}
          onChange={(value) => setNewItem(value)}
        />
        <IconButton
          icon={<PlusIcon />}
          onClick={handleAddItem}
          appearance="primary"
          color="blue"
        />
      </InputGroup>

      {/* Список (List) */}
      <List bordered hover>
        {items.map((item, index) => (
          <List.Item key={index} index={index}>
            {item}
          </List.Item>
        ))}
      </List>

      
          <Button onClick={handleAddItem} appearance="primary">
            Добавить
          </Button>
      
    </div>
  );
}

export default App;
