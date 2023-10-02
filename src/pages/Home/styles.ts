import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  section {
    margin-top: 4.5rem;
    div {
      display: flex;
      justify-content: space-between;
      h4 {
        font-size: 1.125rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`

export const InputSearch = styled.input`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  margin-top: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`