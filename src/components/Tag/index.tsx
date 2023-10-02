import { ReactNode } from 'react'
import { TagContainer } from './styles'

interface TagProps {
  icon: ReactNode
  text: string
  textAsWhite?: boolean
}

export function Tag({ icon, text, textAsWhite = false }: TagProps) {
  return (
    <TagContainer className={textAsWhite ? 'textAsWhite' : ''}>
      {icon}
      <span>{text}</span>
    </TagContainer>
  )
}