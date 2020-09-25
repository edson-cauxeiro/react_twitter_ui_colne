import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body

} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
          <Body>
            <List 
                title="Talvez você curta"
                elements={[
                  <FollowSugestion 
                    name="Guilherme Rodz"
                    nickname="@guilherme_rodz"
                  />,
                  <FollowSugestion 
                    name="Mayke Brito"
                    nickname="@maykebrito"
                  />,
                  <FollowSugestion 
                    name="Diego Fernades"
                    nickname="@diego_fernandes"
                  />
                ]}
            />

            <List 
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />
                ]}
            />
            <List 
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />
                ]}
            />
            <List 
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />
                ]}
            />
            <List 
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />
                ]}
            />
            <List 
                title="Talvez você curta"
                elements={[
                  <News />,
                  <News />,
                  <News />
                ]}
            />
          </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;