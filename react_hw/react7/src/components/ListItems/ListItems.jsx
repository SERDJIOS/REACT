import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function ListItems() {
  const { translations } = useContext(LanguageContext)

  return <h1>{translations.title}</h1>
}