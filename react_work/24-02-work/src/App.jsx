/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import {ThemeProvider,createTheme,CssBaseline } from '@mui/material';
import {css} from '@emotion/rect';
import styled from '@emotion/styled';

import './App.css'


const theme = createTheme({
  mode: 'dark',

})

const StyledButton = styled("button")`
background-color: #4CAF50;
color: white;
padding: 10px 20px;
`
function App() {


  return (
    <>
      
    </>
  )
}

export default App
