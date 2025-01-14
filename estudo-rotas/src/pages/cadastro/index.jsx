import {MdEmail, MdLock, MdPerson } from 'react-icons/md'; // icones de email e cadeadi
import { useNavigate } from 'react-router-dom'; // utilizado para navegação

import { Button } from '../../components/button';
import {Header} from '../../components/header'
import {Input}from '../../components/Input';

import { useForm } from "react-hook-form"; // hook para mexer no formulário
import {CriarText, Column, Container, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, PoliticasPrivacidade} from './styles'

import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    nome: yup.string().required(),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();



const Cadastro = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    
    console.log(isValid, errors)

    const onSubmit = async formData => {
        try {
            const response = await api.post("users", {
                nome: formData.nome,
                email: formData.email,
                senha: formData.password,
            });

            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
                navigate('/feed');
            }
        } catch (error) {
            alert("Erro ao cadastrar o usuário. Por favor, tente novamente. Erro: " + error);
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
                            <Input name='nome' errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={(<MdPerson />)} />
                            <Input name='email' errorMessage={errors?.email?.message}  control={control} placeholder="Email" leftIcon={(<MdEmail />)}/>
                            <Input name='password' errorMessage={errors?.password?.message}   control={control}  placeholder="Senha" type="password" leftIcon={(<MdLock />)}/>
                            <Button title="Entrar" variant="secondary"  type="submit"/>
                        </form>
                       
                        <PoliticasPrivacidade>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PoliticasPrivacidade>
                           
                        
                        <Row>
                            <p>Já tenho uma conta. <a href='/login' style={{ color:"#00FF00"  }}>Fazer Login</a></p>
                        </Row>
                       
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}
export { Cadastro };
