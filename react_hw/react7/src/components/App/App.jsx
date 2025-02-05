import { LanguageProvider } from '../context/LanguageContext'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import ListItems from '../ListItems/ListItems'
import './App.module.css'

function App() {
  return (
    <LanguageProvider>
      <ListItems />
      <LanguageSwitch />
    </LanguageProvider>
  )
}

export default App