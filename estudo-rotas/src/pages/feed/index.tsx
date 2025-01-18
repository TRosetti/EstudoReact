import {Header} from '../../components/header'
import {Card} from '../../components/card'
import {UserInfo} from '../../components/userInfo'
import {Container, Column, Title, TitleHighlight} from './styles'

const Feed = () => {
    return (
        <div>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={65} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                    <UserInfo percentual={25} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                    <UserInfo percentual={45} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                    <UserInfo percentual={45} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                    <UserInfo percentual={45} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                    <UserInfo percentual={45} nome="Thiago Rosetti" imagem="https://avatars.githubusercontent.com/u/105075815?v=4"></UserInfo>
                </Column>
                
            </Container>
           
        </div>
    )
}
export { Feed };