import { createContext, useState } from 'react'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('ru')

  const translations = {
    ru: {
      title: 'Выбрать язык английский',
      switchLanguage: 'Switch to English',
    },
    en: {
      title: 'Russian language was chosen',
      switchLanguage: 'Переключить на русский',
    },
  }

  function toggleLanguage() {
    setCurrentLanguage(prev => (prev === 'ru' ? 'en' : 'ru'))
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        toggleLanguage,
        translations: translations[currentLanguage],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}