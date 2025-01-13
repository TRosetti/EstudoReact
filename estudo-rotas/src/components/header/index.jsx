import React from 'react';
import logo from '../../assets/logo.webp';
import { Button } from '../button';

import { 
  Container,
  BuscarInputContainer,
  Input,
  Row,
  Wrapper,
  Menu,
  MenuRight,
  UserPicture

} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" height="25px" />
          {autenticado ? (
            <>
                <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>GLobal</Menu>
            </>
          ): null}
         
        </Row>
        <Row>

          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/105075815?v=4' />
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar"/>
              <Button title="Cadastrar"/>
            </>
          )}
          
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header};