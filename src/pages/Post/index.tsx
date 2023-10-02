/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { ButtonLink } from '../../components/ButtonLink'
import { Spinner } from '../../components/Spinner'
import { Tag } from '../../components/Tag'
import { api } from '../../lib/axios'
import { PostContainer, PostContent, PostHeader } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { relativeDateFormatter } from '../../utils/formatter'

interface PostDetailsProps {
  title: string
  html_url: string
  created_at: string
  comments: number
  body: string
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
        console.log('Error: ', err)
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
          <Spinner />
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
              <Tag
                icon={<FaCalendarDay />}
                text={relativeDateFormatter(post.created_at)}
              />
              <Tag icon={<FaComment />} text={`${post.comments} comentarios`} />
            </div>
          </>
        )}
      </PostHeader>
      <PostContent>
        {!isLoading && (
          <ReactMarkdown
            children={post.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        )}
      </PostContent>
    </PostContainer>
  )
}