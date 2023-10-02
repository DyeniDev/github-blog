import {
  InfoProfileContainer,
  InfoProfileContent,
  TagsContainer,
} from './styles'

import avatar from '../../../assets/avatar.png'
import { Tag } from '../../../components/Tag'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { ButtonLink } from '../../../components/ButtonLink'

export function InfoProfile() {
  return (
    <InfoProfileContainer>
      <img src={avatar} alt="" />
      <InfoProfileContent>
        <div>
        <div className="contentHeader">
            <h3>Cameron Williamson</h3>
            <ButtonLink
              iconRight={<FaExternalLinkAlt />}
              text="GITHUB"
              isExternalLink
              link="https://github.com/DyeniDev"
            />
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <TagsContainer>
          <Tag icon={<FaGithub />} text="cameronwll" textAsWhite />
          <Tag icon={<FaBuilding />} text="Rocketseat" textAsWhite />
          <Tag icon={<FaUserFriends />} text="32 seguidores" textAsWhite />
        </TagsContainer>
      </InfoProfileContent>
    </InfoProfileContainer>
  )
}