import { useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ButtonGroup from './ButtonGroup';

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  }
})

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ButtonGroup/>
    </ThemeProvider>
  )
  }


export default App
