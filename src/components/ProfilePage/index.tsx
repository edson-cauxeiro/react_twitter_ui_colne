import React from 'react';

import Feed from '../Feed';
import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Edson Cauxeiro</h1>
        <h2>@edson_cauxeiro</h2>

        <p>
          Developer at <a href="http://www.google.com">@Codefreela</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Luanda, Angola
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de Abril
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;