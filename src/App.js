import React from 'react'
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { CalculatorProvider } from './contexts/CalculatorContext';

const buttonValues = 
[
  ["C", "+/-", "%", "/"],
  [7,8,9, "x"],
  [4,5,6,"-"],
  [1,2,3, "+"], 
  [0, ".", "="]
]

const App = () => {
  return (
    <CalculatorProvider>
      <header style={{ textAlign: "center"}}><h1>Calculator App</h1></header>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          { buttonValues.flat().map((value, idx)=> (<Button value={value} key={idx}/>)) }
        </ButtonBox>
      </Wrapper>
    </CalculatorProvider>
  )
}

export default App;

