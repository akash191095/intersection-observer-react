import classNames from 'classnames'

type CardProps = {
  isFirst?: boolean
  isLast?: boolean
  visible: boolean
}

const getCardContent = ({
  isFirst,
  isLast,
}: Pick<CardProps, 'isFirst' | 'isLast'>) => {
  if (isFirst) {
    return 'This is the first card'
  } else if (isLast) {
    return 'This is the last card'
  } else {
    return 'This is a card'
  }
}

function Card({ isFirst, isLast, visible }: CardProps) {
  return (
    <div className={classNames('card', { show: visible })}>
      {getCardContent({ isFirst, isLast })}
    </div>
  )
}

export default Card
