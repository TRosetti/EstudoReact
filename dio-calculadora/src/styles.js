import styled from 'styled-components';  

export const Container = styled.div`
    width: 350px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`

export const Content = styled.div`
    width: 100%;
    min-height: 350px;
    background-color: #767677;
    border-radius: 10px;
    border: 1px solid #848484;
    overflow: hidden;
    position: relative;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

