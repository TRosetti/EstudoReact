import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';
import cardImg from '../../assets/img-card-test.png';


import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserPicture, UserInfo } from './styles';

export const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={cardImg}/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/105075815?v=4' />
                    <div>
                        <h4>Thiago Rosetti</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de React.js</h4>
                    <p>Projeto feito para estudo de navegação, utilizando o curso da DIO... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#React.js #HTML #CSS</h4>
                    <p>
                        <FiThumbsUp /> 25
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

