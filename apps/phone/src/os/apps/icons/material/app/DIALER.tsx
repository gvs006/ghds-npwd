import { Box, styled } from '@mui/material';
import React from 'react';
import img from '../../../../../../src/apps/imgs/phone.png';

const DialerIconStyle = styled(Box)`
  border-radius: 18px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 2px;
  &:hover {
    z-index: 20;
    opacity: 0.8;
  }
`;

const DialerIcon: React.FC = () => (
  <DialerIconStyle>
    <img src={img} width={100} height={100} alt="" />
  </DialerIconStyle>
);

export default DialerIcon;
