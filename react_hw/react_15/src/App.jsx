import React, { useState, useCallback, useMemo } from 'react';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

// Компонент для отображения списка машин
function CarList({ cars }) {
  return (
    <Paper elevation={3} sx={{ padding: '16px', marginTop: '16px' }}>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id}>
            <ListItemText primary={car.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default function App() {
  // Массив автомобилей
  const carList = [
    { id: 1, name: 'Tesla Model S' },
    { id: 2, name: 'BMW X5' },
    { id: 3, name: 'Audi Q7' },
    { id: 4, name: 'Mercedes-Benz C-Class' },
    { id: 5, name: 'Ford Mustang' },
  ];

  // Состояние для фильтрации
  const [filter, setFilter] = useState('');

  // Функция фильтрации
  const filterCars = useCallback(
    (filterText) => {
      return carList.filter((car) =>
        car.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [carList]
  );

  // Мемоизация отфильтрованного списка
  const filteredCars = useMemo(() => filterCars(filter), [filter, filterCars]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: '40px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Список автомобилей
      </Typography>

      <TextField
        label="Фильтр по названию"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />

      <Button variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
        Очистить фильтр
      </Button>

      <CarList cars={filteredCars} />
    </Container>
  );
}
