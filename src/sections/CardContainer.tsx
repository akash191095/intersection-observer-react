import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import CardObserver from '../components/CardObserver'

type Cards = {
  id: string
}[]

function CardContainer() {
  const [cards, setCards] = useState<Cards>(() => {
    // initial cards
    return Array.from({ length: 50 }).map(() => ({
      id: nanoid(),
    }))
  })

  // track last card
  const { ref: lastCardRef } = useInView({
    rootMargin: '100px',
    onChange(inView) {
      if (inView && cards.length <= 100) {
        // add new cards on scroll (max 100 cards)
        addNewCards()
      }
    },
  })

  const addNewCards = () => {
    const newCards = Array.from({ length: 10 }).map(() => ({
      id: nanoid(),
    }))
    setCards([...cards, ...newCards])
  }

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={index === cards.length - 1 ? lastCardRef : undefined}
        >
          <CardObserver
            isLast={index === cards.length - 1}
            isFirst={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

export default CardContainer
