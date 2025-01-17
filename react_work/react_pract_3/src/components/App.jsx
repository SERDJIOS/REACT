import './App.css'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  function switchTheme () {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <Header theme={theme} switchTheme={switchTheme}/>
      <Main theme={theme}/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
