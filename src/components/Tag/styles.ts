import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-label']};
  span::first-letter {
    text-transform: capitalize;
  }
  
  &.textAsWhite {
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`