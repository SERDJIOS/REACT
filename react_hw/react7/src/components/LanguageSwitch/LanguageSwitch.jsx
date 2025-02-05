import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function LanguageSwitch() {
  const { toggleLanguage, translations } = useContext(LanguageContext)
  return (
    <>
      <button onClick={toggleLanguage}>{translations.switchLanguage}</button>
    </>
  )
}