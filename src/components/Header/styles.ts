import styled from 'styled-components'

import headerBackground from '../../assets/header-background.png'

export const HeaderContainer = styled.div`
  height: 18.5rem;
  background-image: url(${headerBackground});
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .logo {
    position: absolute;
    top: 4.156rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .effectsContainer {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 1340px) {
    background-size: 1340px 100%;
    background-position: center;
    .effectsContainer {
      position: absolute;
      width: 1340px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`