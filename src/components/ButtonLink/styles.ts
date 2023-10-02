import styled from 'styled-components'

export const ButtonLinkContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.blue};
    gap: 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    line-height: initial;
    border-bottom: 2px solid transparent;
    &:hover {
      border-color: ${(props) => props.theme.blue};
      transition: border-color 0.3s;
    }
  }
`