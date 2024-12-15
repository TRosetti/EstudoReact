import { InputContainer } from './style';

const Input = ({value = 0})=>{
    return (
        <InputContainer>
            <input  disabled value={value}/>
            
        </InputContainer>
        
    );
}

export default Input;
