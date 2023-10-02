import styled from 'styled-components'

export const InfoProfileContainer = styled.div`
  min-height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;

  display: flex;
  gap: 2rem;

  padding: 2rem 2.5rem;

  > img {
    width: 9.25rem;
    border-radius: 8px;
  }

  .contentHeader {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    > img {
      width: 100%;
    }
  }
`

export const InfoProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 3;
    line-clamp: 2;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 520px) {
    margin-top: 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`