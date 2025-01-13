import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
// import { Button } from '../../components/button';
import {Header} from '../../components/header'
import {Container, TextContent, Title, TitleHighlight} from './styles'

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () =>{
        navigate('/login')
    }
    return (
        <div>
            <Header />
            
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>Implemente</TitleHighlight>
                        <br />
                        o seu futuro global agora! 
                    </Title>
                    <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts</TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}></Button>
                </div>
                <div>
                    <img src="https://hermes.digitalinnovation.one/public/components/pages/home/how-it-works/emerging-technologies.png" alt="Imagem principal" />
                </div>
            </Container>
        </div>
    )
}
export { Home };