import { Box, styled } from '@mui/material';
import React from 'react';
import contacts from '../../../../../../src/apps/imgs/contacts.png'



const ContactIconStyle = styled(Box)`
 border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  &:hover {
    z-index: 20;
    opacity: 0.8;
  }
`;
const ContactIcon: React.FC = () => <ContactIconStyle><img src={contacts} width={100}></img></ContactIconStyle>

export default ContactIcon;
