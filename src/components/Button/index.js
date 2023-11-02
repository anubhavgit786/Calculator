import React from 'react'
import { useCalculator } from '../../contexts/CalculatorContext';

const getStyleName = (value)=>
{
  const className = { "=" : "equals", "+": "operator", "-": "operator", "x": "operator", "/": "operator" }
  return className[value];
}

const Button = ({ value }) => 
{
  const { handleClickReset, handleClickDot, handleClickNumber, handleClickEquals,  handleClickOperator, handleClickPercent, handleClickInvert } = useCalculator();

  const handleButtonClick = ()=>
  {
    if(value === "C")
    {
      handleClickReset();
    }
    else if(value === ".")
    {
      handleClickDot();
    }
    else if(value === "=")
    {
      handleClickEquals();
    }
    else if(value === "+" || value === "-" || value === "x" || value === "/")
    {
      handleClickOperator(value);
    }
    else if(value === "%")
    {
      handleClickPercent();
    }
    else if(value === "+/-")
    {
      handleClickInvert();
    }
    else
    {
      handleClickNumber(value);
    }
  }

  return (<button className={`${getStyleName(value)} button`} onClick={handleButtonClick}>{ value }</button>)
}

export default Button;
