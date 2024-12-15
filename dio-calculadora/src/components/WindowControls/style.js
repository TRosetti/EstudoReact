import styled from 'styled-components';

export const WindowControlsContainer = styled.div`
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    
    .button{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        margin-right: 5px;       
    }
    .close-button{
        background-color: #FF605C;
    }
    .minimize-button{
        background-color: #FFBD44;
    }
    .increase-button{
        background-color: #00CA4E;
    }
`