import styled from "styled-components";

export const ItemConatainer = styled.div`
    width: 80%;
    margin-top:20px;

    button, a.ver-repo{
        color:  #FF605C;
        border: none;
        background: none;
        text-decoration: underline;
        padding: 10px 0;
        font-size: 16px;
    }
    a.ver-repo{
        color:  #5C65FF;
        padding-right: 10px;
    }

    h3{
        font-size: 35px;
        color: #fafafa;
        text-transform: capitalize;
    }
    p{
        font-size: 16px; 
        color: #fafafaaa;
        padding-bottom: 10px;
    }
    hr{
        margin: 10px 0;
    }
`