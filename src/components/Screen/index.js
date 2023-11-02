import React from 'react';
import Textfit from '@namhong2001/react-textfit';

import { useCalculator } from "../../contexts/CalculatorContext";

const Screen = () => 
{
  const { calc } = useCalculator();
  return (<Textfit className='screen' max={70} mode='single'>{ calc.number ? calc.number : calc.result }</Textfit>)
}

export default Screen;
