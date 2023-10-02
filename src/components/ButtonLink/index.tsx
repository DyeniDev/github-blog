import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLinkContainer } from './styles'

interface ButtonLinkProps {
  iconLeft?: ReactNode
  iconRight?: ReactNode
  text?: string
  link: string
  isExternalLink?: boolean
}

interface ComponentTypeProps extends ButtonLinkProps {
  children: ReactNode
}

function ComponentType({ children, isExternalLink, link }: ComponentTypeProps) {
  if (isExternalLink) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  } else {
    return <Link to={link}>{children}</Link>
  }
}

export function ButtonLink({
  iconLeft,
  iconRight,
  text,
  link,
  isExternalLink = false,
}: ButtonLinkProps) {
  return (
    <ButtonLinkContainer>
      <ComponentType isExternalLink={isExternalLink} link={link}>
        {iconLeft && iconLeft}
        {text}
        {iconRight && iconRight}
      </ComponentType>
    </ButtonLinkContainer>
  )
}