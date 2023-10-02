import { useEffect, useState } from 'react'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { ButtonLink } from '../../components/ButtonLink'
import { Tag } from '../../components/Tag'
import { api } from '../../lib/axios'
import { PostContainer, PostHeader } from './styles'

interface PostDetailsProps {
  title: string
  html_url: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<PostDetailsProps>({} as PostDetailsProps)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get<PostDetailsProps>(
          `/repos/kaikySantos/github-blog/issues/${id}`,
        )

        setPost(response.data)
      } catch (err) {
        console.log('Error!')
      } finally {
        setIsLoading(false)
      }
    }

    getPost()
  }, [id])

  return (
    <PostContainer>
      <PostHeader>
      {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            <header>
              <ButtonLink
                iconLeft={<FaAngleLeft size={18} />}
                text="VOLTAR"
                link="/"
              />
              <ButtonLink
                iconRight={<FaExternalLinkAlt />}
                text="GITHUB"
                isExternalLink
                link={post.html_url}
              />
            </header>

            <h4>{post.title}</h4>

            <div className="tagsContainer">
              <Tag icon={<FaGithub />} text={post.user.login} />
              <Tag icon={<FaCalendarDay />} text={post.created_at} />
              <Tag icon={<FaComment />} text={`${post.comments} comentarios`} />
            </div>
          </>
        )}
      </PostHeader>
    </PostContainer>
  )
}