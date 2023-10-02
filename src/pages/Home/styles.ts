import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 2rem;

  section {
    margin-top: 4.5rem;

    div:first-child {
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

export const CartsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled(Link)`
  text-decoration: none;
  border: 2px solid transparent;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.25rem;
    span {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      margin-left: 1rem;
    }
  }
  p {
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 3;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 0.3s;
  }
`