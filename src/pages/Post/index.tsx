import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { ButtonLink } from '../../components/ButtonLink'
import { Tag } from '../../components/Tag'
import { PostContainer, PostHeader } from './styles'

export function Post() {
  // const { id } = useParams()

  return (
    <PostContainer>
      <PostHeader>
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
            link="https://github.com/DyeniDev"
          />
        </header>

        <h4>JavaScript data types and data structures</h4>

        <div className="tagsContainer">
          <Tag icon={<FaGithub />} text="cameronwll" />
          <Tag icon={<FaCalendarDay />} text="cameronwll" />
          <Tag icon={<FaComment />} text="cameronwll" />
        </div>
      </PostHeader>
    </PostContainer>
  )
}