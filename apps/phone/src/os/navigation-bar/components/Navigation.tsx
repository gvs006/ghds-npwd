import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { usePhone } from '@os/phone/hooks/usePhone';
import { ChevronLeft, Circle, LayoutGrid, Minus } from 'lucide-react';
import { Box, styled } from '@mui/material';

const HomeButton = styled(Box)`
  width: 10vw;
  height: 1vh;
  background-color: #ccc;
  border-radius: 0.5rem;
  margin: 2.1vh auto;
  position: fixed;
  bottom: 11vh;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover{
    background-color: #999;
  }
`

export const Navigation: React.FC = () => {
  const history = useHistory();
  const { isExact } = useRouteMatch('/');
  const { closePhone } = usePhone();

  const handleGoBackInHistory = () => {
    history.goBack();
  };

  const handleGoToMenu = () => {
    if (isExact) return;
    history.push('/');
  };

  return (
    <div className="bg-transparent dark:bg-transparent w-full h-14 px-12">
      
        <button onClick={handleGoToMenu}>
        <HomeButton>
          {/* <Minus className="text-neutral-400 hover:dark:text-neutral-100 h-6 w-full hover:text-neutral-900 " /> */}
          </HomeButton>

        </button>
        {/* <button onClick={handleGoToMenu}>
          <Circle className="text-neutral-400 hover:dark:text-neutral-100 h-6 w-6 hover:text-neutral-900 " />
        </button>
        <button onClick={handleGoBackInHistory}>
          <ChevronLeft className="text-neutral-400 hover:dark:text-neutral-100 hover:text-neutral-900 h-6 w-6" />
        </button> */}
    </div>
  );
};
