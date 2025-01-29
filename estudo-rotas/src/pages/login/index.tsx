
import {MdEmail, MdLock } from 'react-icons/md'; // icones de email e cadeadi

import { Button } from '../../components/button';
import {Header} from '../../components/header'
import {Input}from '../../components/Input';

import { useForm } from "react-hook-form"; // hook para mexer no formulário
import {CriarText, Column, Container, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'


import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IformData } from './types';
import { useAuth } from '../../hooks/useAuth';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required()


const Login = () => {

    
    const {handleLogin} = useAuth();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    
    console.log(isValid, errors)

    const onSubmit = async (formData: IformData) => {
        handleLogin(formData)
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