import {createContext} from 'react'

 const GameContext = createContext(null)

 export default function GameProvider({children}){

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [matchesLeft, setMatchesLeft] = useState(cards.length)
    const [openedCards, setOpenedCards] = useState([])


    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

    function generateCards() {
        const duplicatedEmojis = [...emojis, ...emojis]
        const newCards = duplicated.map(emoji => ({
            id: Date.now() + Math.random(),
            emoji: emoji,
            isFlipped: false,
            isMatched: false
        }))
        const randomCards = newCards.sort(() => Math.random() - 0.5)
        setCards(randomCards)
    }

    return(
        <GameContext.Provider value={{cards, setCards, turns, setTurns, matchesLeft, setMatchesLeft, emojis}}>
            {children}
        </GameContext.Provider>
    )
 }