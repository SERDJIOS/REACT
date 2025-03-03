/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline, Button } from '@mui/material';
import { css } from '@emotion/react'; // Исправлен импорт
import styled from '@emotion/styled'; // Использование styled из emotion


const theme = createTheme({
  palette: {
    mode: 'dark', // Определена темная тема
  },
});

// Стилизация кнопки через @emotion/styled
const StyledButton = styled("button")`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Применение темы */}
      <CssBaseline /> {/* Применение глобальных стилей для корректной работы темы */}
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
        `}
      >
        <h1>Привет, мир!</h1>
        <StyledButton>Нажми меня</StyledButton>
        <Button variant="contained" color="primary">
          МUI Кнопка
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
