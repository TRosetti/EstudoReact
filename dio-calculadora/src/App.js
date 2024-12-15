import Input from './components/Input';
import Button from './components/Button'
import WindowControls from './components/WindowControls'

import { Container, Content, Row } from './styles';
import { useState } from 'react';



const App = ()=>{

  const [ currentNumber, setCurrentNumber ] = useState('0');
  const [ firstNumber, setFirstNumber ] = useState('0');
  const [ operation, setOperation ] = useState('');


  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  } 

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('')
    }
  } 
  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('')
    }
  } 
  const handleTimesNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('X')
    }else{
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times));
      setOperation('')
    }
  } 
  
  const handlePercentNumbers = () => {
    const percent = Number(currentNumber) / 100;
    setCurrentNumber(String(percent));
  }
  const handlePlusOrMinusNumbers = () => {

    const plusMinus = Number(currentNumber) * (-1);
    setCurrentNumber(String(plusMinus));
    
  }
  
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '/':
            handleDivideNumbers();
            break;

        case 'X':
            handleTimesNumbers();
            break;
        
        default:
          break
      }
    }
  } 

  return (
    <Container>
      <Content>
        <WindowControls />
        <Input value={currentNumber} />
        <Row>
          <Button color="#5E5E5E" label="AC" onClick={ () => handleOnClear()}/>
          <Button color="#5E5E5E" label="+/-" onClick={handlePlusOrMinusNumbers}/>
          <Button color="#5E5E5E" label="%" onClick={handlePercentNumbers}/>
          <Button color="#F1A33C" label="/" onClick={handleDivideNumbers}/>
        </Row>
        <Row>
          <Button color="#767677" label="7" onClick={ () => handleAddNumber('7')}/>
          <Button color="#767677" label="8" onClick={ () => handleAddNumber('8')}/>
          <Button color="#767677" label="9" onClick={ () => handleAddNumber('9')}/>
          <Button color="#F1A33C" label="X" onClick={handleTimesNumbers}/>
        </Row>
        <Row>
          <Button color="#767677" label="4" onClick={ () => handleAddNumber('4')}/>
          <Button color="#767677" label="5" onClick={ () => handleAddNumber('5')}/>
          <Button color="#767677" label="6" onClick={ () => handleAddNumber('6')}/>
          <Button color="#F1A33C" label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button color="#767677" label="1" onClick={ () => handleAddNumber('1')}/>
          <Button color="#767677" label="2" onClick={ () => handleAddNumber('2')}/>
          <Button color="#767677" label="3" onClick={ () => handleAddNumber('3')}/>
          <Button color="#F1A33C" label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button color="#767677" label="💱" onClick={ () => handleAddNumber('T.Rosetti')}/>
          <Button color="#767677" label="0" onClick={ () => handleAddNumber('0')}/>
          <Button color="#767677" label="," onClick={ () => handleAddNumber('.')}/>
          <Button color="#F1A33C" label="=" onClick={handleEquals}/>
        </Row>
       
      </Content>
    </Container>
  );
}

export default App;
