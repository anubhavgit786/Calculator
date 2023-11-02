import React, { createContext, useContext, useState } from 'react';

const math = (a, b, sign)=>
{
  const result = 
  {
    "+" : (a, b)=> a+b,
    "x" : (a, b)=> a*b,
    "-" : (a, b)=> a-b,
    "/" : (a, b)=> a/b,
  }
  return result[sign](a, b);
}


const CalculatorContext = createContext();

const initialState = { sign: "", number: 0, result: 0  };


const CalculatorProvider = ({ children }) => 
{
    const [calc, setCalc] = useState(initialState);

    const handleClickReset = ()=>
    {
      setCalc((calc)=> ({ ...calc, sign: "", number: 0, result: 0 }));
    }

    const handleClickDot = ()=>
    {
      setCalc((calc)=> ({ ...calc, number: !calc.number.toString().includes('.') ? calc.number + '.' : calc.number }));
    }

    const handleClickEquals = ()=>
    {
      if(calc.result && calc.number)
      {
        setCalc((calc)=> ({ ...calc, result: math(calc.result, calc.number, calc.sign), sign: "", number: 0 }));
      }
    }

    const handleClickOperator = (operator)=>
    {
      setCalc((calc)=> ({ ...calc, sign: operator, result: !calc.result && calc.number ? calc.number : calc.result, number: 0 }));
    }

    const handleClickPercent = ()=>
    {
      setCalc((calc)=> ({ ...calc, number: calc.number / 100, result: calc.result / 100, sign: "" }));
    }

    const handleClickInvert = ()=>
    {
      setCalc((calc)=> ({ ...calc, number: calc.number ? calc.number * -1 : 0, result: calc.result ? calc.result * -1 : 0, sign: "" }));
    }

    const handleClickNumber = (value)=>
    {
      const numToString = value.toString();
      let numberValue;

      if(numToString === '0' && calc.number === 0)
      {
        numberValue = "0";
      }
      else 
      {
        numberValue = Number(calc.number + numToString);
      }
      setCalc((calc)=> ({ ...calc, number: numberValue }))
    }

    

  
  return (<CalculatorContext.Provider value={{ calc, handleClickReset, handleClickDot, handleClickNumber, handleClickEquals,  handleClickOperator, handleClickPercent, handleClickInvert }}>{children}</CalculatorContext.Provider>);
}

const useCalculator = ()=>
{
  const context = useContext(CalculatorContext);
  if(context === undefined)
  {
    throw new Error("CalculatorContext is used outside of the CalculatorProvider");
  }

  return context;
}

export { CalculatorProvider, useCalculator };