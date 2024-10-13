import React from 'react';
import img from '../../../../../../src/apps/imgs/safari.png'
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const BrowserIconStyle = styled(Box)`
     border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;&:hover{

 z-index: 20;
 opacity: 0.8;
 
}
`
const BrowserIcon: React.FC = () => <BrowserIconStyle><img src={img} width={100} alt="" /></BrowserIconStyle>;

export default BrowserIcon;
