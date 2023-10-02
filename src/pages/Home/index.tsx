import { InfoProfile } from './InfoProfile'
import { HomeContainer, InputSearch } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <InfoProfile />
      
      <section>
        <div>
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </div>

        <InputSearch placeholder="Buscar conteúdo" />
      </section>
    </HomeContainer>
  )
}