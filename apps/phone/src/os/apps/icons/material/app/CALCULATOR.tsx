import React from 'react';
import calc from '../../../../../../src/apps/imgs/calc.png'
import { Box, styled } from '@mui/material';

const CalculatorIconStyle = styled(Box)`
        border-radius: 18px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &:hover {
    z-index: 20;
    opacity: 0.8;
  }
`;

const Calculator: React.FC = () => <CalculatorIconStyle><img src={calc} alt=""/></CalculatorIconStyle>;

export default Calculator;