
import {MdEmail, MdLock } from 'react-icons/md'; // icones de email e cadeadi
import { useNavigate } from 'react-router-dom'; // utilizado para navegação

import { Button } from '../../components/button';
import {Header} from '../../components/header'
import {Input}from '../../components/Input';

import { useForm } from "react-hook-form"; // hook para mexer no formulário
import {CriarText, Column, Container, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'

import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IformData } from './types';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required()


const Login = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    
    console.log(isValid, errors)

    const onSubmit = async (formData: IformData) => {
        try {
           const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1 ){
                navigate('/feed')
            }else{
               alert("Email ou senha inválida.")
            }
        } catch (error) {
           alert("Houve um erro, error: " + error)
        }
    }
    

    return (
        <div>
            <Header />
            
            <Container>
                <Column>
                
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' errorMessage={errors?.email?.message}  control={control} placeholder="Email" leftIcon={(<MdEmail />)}/>
                            <Input name='password' errorMessage={errors?.password?.message}   control={control}  placeholder="Senha" type="password" leftIcon={(<MdLock />)}/>
                            <Button title="Entrar" variant="secondary"  type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}
export { Login };