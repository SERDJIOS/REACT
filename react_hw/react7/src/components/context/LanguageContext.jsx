import { createContext, useState } from 'react'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('ru')

  const translations = {
    ru: {
      title: 'Список',
      switchLanguage: 'Switch to English',
    },
    en: {
      title: 'List',
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