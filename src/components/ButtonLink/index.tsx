import { ReactNode } from 'react'
import { ButtonLinkContainer } from './styles'

interface ButtonLinkProps {
  iconLeft?: ReactNode
  iconRight?: ReactNode
  text: string
}

export function ButtonLink({ iconLeft, iconRight, text }: ButtonLinkProps) {
  return (
    <ButtonLinkContainer>
      <a href="#">
        {iconLeft && iconLeft}
        {text}
        {iconRight && iconRight}
      </a>
    </ButtonLinkContainer>
  )
}