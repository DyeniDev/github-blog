import {
  InfoProfileContainer,
  InfoProfileContent,
  TagsContainer,
} from './styles'

import avatar from '../../../assets/avatar.png'
import { Tag } from '../../../components/Tag'

import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'

export function InfoProfile() {
  return (
    <InfoProfileContainer>
      <img src={avatar} alt="" />
      <InfoProfileContent>
        <div>
          <h3>Cameron Williamson</h3>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <TagsContainer>
          <Tag icon={<FaGithub />} text="cameronwll" />
          <Tag icon={<FaBuilding />} text="Rocketseat" />
          <Tag icon={<FaUserFriends />} text="32 seguidores" />
        </TagsContainer>
      </InfoProfileContent>
    </InfoProfileContainer>
  )
}