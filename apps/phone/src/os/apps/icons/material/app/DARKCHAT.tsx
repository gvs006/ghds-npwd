import ForumIcon from '@mui/icons-material/Forum';
import { Box, styled } from '@mui/material';
import img from '../../../../../../src/apps/imgs/dark-web.png';


const DarkchatIconStyle = styled(Box)`
   border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 2px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    z-index: 20;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }
`;
const DarkchatIcon = () => 

<DarkchatIconStyle>
    <img src={img} width={100} alt="" />
  </DarkchatIconStyle>
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="43" width="43">
  //   <g>
  //     <path fill="none" d="M0 0L24 0 24 24 0 24z" />
  //     <path
  //       fill="#fff"
  //       d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349c1.148.614 2.43.939 3.765.939 4.418 0 8-3.582 8-8s-3.582-8-8-8zm0 3c1.657 0 3 1.343 3 3v1h1v5H8v-5h1v-1c0-1.657 1.343-3 3-3zm2 6h-4v1h4v-1zm-2-4c-.552 0-1 .45-1 1v1h2v-1c0-.552-.448-1-1-1z"
  //     />
  //   </g>
  // </svg>
;

export default DarkchatIcon;
