import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { relativeDateFormatter } from '../../utils/formatter'
import { InfoProfile } from './InfoProfile'
import { Card, CartsContainer, HomeContainer, InputSearch } from './styles'

interface PostProps {
  title: string
  created_at: string
  body: string
  number: number
}

interface GetPostResponse {
  incomplete_results: boolean
  total_count: number
  items: PostProps[]
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getPosts(query: string = '') {
    try {
      const response = await api.get<GetPostResponse>(
        `/search/issues?q=${query}%20repo:kaikySantos/github-blog`,
      )

      setPosts(response.data.items)
    } catch (err) {
      console.log('Error: ', err)
    } finally {
      setIsLoading(false)
    }
  }

  function formatterDescriptionCard(text: string) {
    return text.replaceAll('#', '')
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <HomeContainer>
      <InfoProfile />
      
      <section>
        <div>
          <h4>Publicações</h4>
          <p>{posts.length} publicações</p>
        </div>

        <InputSearch placeholder="Buscar conteúdo" />

        <CartsContainer>
        {posts.map((post) => (
            <Card key={post.number} to={`/post/${post.number}`}>
              <header>
                <h4>{post.title}</h4>
                <span>{relativeDateFormatter(post.created_at)}</span>
              </header>
              <p>{formatterDescriptionCard(post.body)}</p>
            </Card>
          ))}
        </CartsContainer>

      </section>
    </HomeContainer>
  )
}