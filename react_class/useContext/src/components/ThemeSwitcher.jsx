import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div style={theme === 'dark' ? { background: 'darkgrey' } : { background: 'lightblue' }}>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  )
}