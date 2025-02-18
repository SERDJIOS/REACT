import { createContext, useEffect, useState } from 'react'

export const GameContext = createContext(null)

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

export function GameProvider({ children }) {
  const [cards, setCards] = useState(generateCards)
  const [turns, setTurns] = useState(0)
  const [matchesLeft, setMatchesLeft] = useState(emojis.length)
  const [flippedCards, setFlippedCards] = useState([])
  const [win, setWin] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTurns(prev => prev + 1)

      const [first, second] = flippedCards
      const isMatch = first.emoji === second.emoji

      if (isMatch) {
        setMatchesLeft(prev => prev - 1)
        setShowFireworks(true) // Показываем анимацию салюта 🎆
        setTimeout(() => setShowFireworks(false), 1000) // Через 1 сек скрываем

        setCards(prevCards =>
          prevCards.filter(card => card.id !== first.id && card.id !== second.id) // Удаляем найденные карты
        )

        if (matchesLeft === 1) setWin(true)
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            )
          )
        }, 1000)
      }
      setFlippedCards([])
    }
  }, [flippedCards])

  function generateCards() {
    const duplicated = [...emojis, ...emojis]
    const newCards = duplicated.map(emoji => ({
      id: Math.random(),
      emoji,
      isFlipped: false,
      isMatched: false,
    }))
    return newCards.toSorted(() => Math.random() - 0.5)
  }

  function handleClick(id) {
    if (flippedCards.length === 2) return
    const clickedCard = cards.find(card => card.id === id)
    if (flippedCards.includes(clickedCard) || clickedCard.isFlipped) return // Защита от повторного нажатия

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    )
    setFlippedCards(prev => [...prev, clickedCard])
  }

  function reset() {
    setCards(generateCards())
    setTurns(0)
    setFlippedCards([])
    setMatchesLeft(emojis.length)
    setWin(false)
    setShowFireworks(false)
  }

  return (
    <GameContext.Provider value={{ cards, turns, matchesLeft, handleClick, reset, win, showFireworks }}>
      {children}
    </GameContext.Provider>
  )
}
