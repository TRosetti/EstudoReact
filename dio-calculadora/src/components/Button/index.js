import { ButtonContainer } from './style';

const Button = ( {label, onClick, color} )=>{
    return (
        <ButtonContainer onClick={onClick} color={color}>{label}</ButtonContainer>
        
    );
}

export default Button;
