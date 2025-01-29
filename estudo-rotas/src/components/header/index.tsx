import logo from '../../assets/logo.webp';
import { Button } from '../button';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

 
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




   
const Header = () => {
  const {user, handleSingOut} = useAuth()

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da DIO" height="25px" />
          </Link>
         
          {user.id ? (
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

          {user.id ? (
            <>
              <UserPicture src='https://avatars.githubusercontent.com/u/105075815?v=4' />
              <a href="/" onClick={handleSingOut} style={{marginLeft: "10px", color: "#fff"}}>Sair</a>
            </>
            
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