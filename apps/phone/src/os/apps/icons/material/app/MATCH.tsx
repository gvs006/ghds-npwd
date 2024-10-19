import { Box, styled } from '@mui/material';

import React from 'react';
import img from '../../../../../../src/apps/imgs/match.png';

const MatchIconStyle = styled(Box)`
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.00) 0px 1px 3px 0px, rgba(27, 31, 35, 0.00) 0px 0px 0px 2px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    z-index: 20;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }
  
  img {
    border-radius: 14px;
  }
`;
const MatchIcon: React.FC = () => 
<MatchIconStyle>
<img src={img} width={100} alt="" />
</MatchIconStyle>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" id="health">
  <defs>
    <linearGradient id="a" x1="-704.843" x2="-704.843" y1="-592.356" y2="-594.355" gradientTransform="matrix(28.0073 0 0 -24.5176 19813.665 -14503.165)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff60ab"></stop>
      <stop offset="1" stop-color="#ff281b"></stop>
    </linearGradient>
  </defs>
  <path fill="#fff" d="M26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A25.94821,25.94821,0,0,1,0,94V26A25.94819,25.94819,0,0,1,26,0Z"></path>
  <path fill="url(#a)" fill-rule="evenodd" d="M73,25s12.6-10.6,22.7-1c8.6,8.2,6,20.7-3.7,31.4C82,66.4,73,69,73,69s-9.1-2.6-19.1-13.6C44.1,44.7,41.5,32.2,50.2,24,60.4,14.4,73,25,73,25Z"></path>
</svg> */}

export default MatchIcon;
