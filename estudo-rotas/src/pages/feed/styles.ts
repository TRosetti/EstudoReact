import styled from 'styled-components';
import { IColumn } from './types';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
`;
   
export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
    color: #fff;

`;

export const TitleHighlight = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
    color: #ffffff70;
`;

export const Column = styled.div<IColumn>`
    flex:   ${({flex}) => flex};
    padding-right: 24px;
`;