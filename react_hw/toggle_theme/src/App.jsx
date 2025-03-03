/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#333333',
    },
  },
});


const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
        `}
      >
        <Typography variant="h4" gutterBottom>
           {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <StyledButton variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
