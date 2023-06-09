import { Aside } from '~/Aside'
import { Card } from '~/Card'

import queryString from 'query-string'

import { useSearchParams } from 'react-router-dom'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

interface PlaceQueryProps {
  state: string
  city: string
}

export function Map() {
  // function handleFilterByPetType() {
  //   // TO DO
  // }
  const [searchParams] = useSearchParams()
  const initialPlaceQuery = queryString.parse(
    String(searchParams),
  ) as unknown as PlaceQueryProps

  return (
    <Container>
      <Aside initialQuery={initialPlaceQuery} />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
        </Display>
      </Content>
    </Container>
  )
}
