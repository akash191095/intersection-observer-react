import { useInView } from 'react-intersection-observer'
import Card from './Card'

type CardObserverProps = {
  isFirst: boolean
  isLast: boolean
}

function CardObserver({ isFirst, isLast }: CardObserverProps) {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  return <Card isLast={isLast} isFirst={isFirst} visible={inView} ref={ref} />
}

export default CardObserver
