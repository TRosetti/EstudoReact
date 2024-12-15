import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 25%;
    height: 65px;
    background-color: ${({ color }) => color || '#5E5E5E'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4C4B4B;
    font-size: 20px;
`