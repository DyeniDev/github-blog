import { HeaderContainer } from './styles'

import logo from '../../assets/header-logo.svg'
import effectLeft from '../../assets/header-effect-left.svg'
import effectRight from '../../assets/header-effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="effectsContainer">
        <img className="effect left" src={effectLeft} alt="" />
        <img className="effect right" src={effectRight} alt="" />
      </div>

      <img className="logo" src={logo} alt="" />
    </HeaderContainer>
  )
}