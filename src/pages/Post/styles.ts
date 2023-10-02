import styled from 'styled-components'

export const PostContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 2rem;
`

export const PostHeader = styled.div`
  min-height: 10.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;
  padding: 2rem;
  header {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }
  .tagsContainer {
    display: flex;
    gap: 2rem;
  }
`

export const PostContent = styled.div``