import React from 'react'
import { InputContainer, IconContainer, InputText, ErrorText } from './styles';
import {IInput} from './type';
import { Controller } from "react-hook-form" 

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer className='InputContainer'>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null }

        <Controller
          name={name}
          control={control}
          rules={{required:  true}}
          render={({ field }) => (  <InputText {...field} {...rest} /> )}
        />
      
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export {Input};