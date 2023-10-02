import { ReactNode } from 'react'
import { TagContainer } from './styles'

interface TagProps {
  icon: ReactNode
  text: string
}

export function Tag({ icon, text }: TagProps) {
  return (
    <TagContainer>
      {icon}
      {text}
    </TagContainer>
  )
}