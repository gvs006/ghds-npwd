import { AppWrapper } from '@ui/components';
import { styled } from '@mui/material/styles';
import React, {Reducer, useEffect, useReducer, useRef} from 'react';
import { AppContent } from '@ui/components/AppContent';
import { Box } from '@mui/material';
import { promiseTimeout } from '../../../utils/promiseTimeout';
import { usePhoneConfig } from '../../../config/hooks/usePhoneConfig';
import {useConfig, usePhone} from "@os/phone/hooks";

const PREFIX = 'BrowserApp';

const classes = {
  iframe: `${PREFIX}-iframe`,
  root: `${PREFIX}-root`,
};

const StyledAppWrapper = styled(AppWrapper)(() => ({
//   [`& .${classes.iframe}`]: {
//     height: '100%',
//     width: '100%',
//     zoom: 0.5,
//     border: 'none',
//   },

  [`& .${classes.root}`]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));


export const BankApp: React.FC = () => {
  const [{ appSettings }] = usePhoneConfig();
  const { ResourceConfig } = usePhone();


//   const handleGoBack = () => {
//     if (browserHistory.length <= 1) return;
//     // Get last page from history
//     const lastPage = browserHistory[browserHistory.length - 1];

//     // Bail if last page is same as current
//     if (lastPage === browserUrl) return;
//     _setBrowserUrl(lastPage);
//   };

//   const reloadPage = async () => {
//     const strCopy = browserUrl.slice();
//     dispatch({ payload: 'about:blank', type: ReducerActionsType.SET_URL });
//     await promiseTimeout(100);
//     dispatch({ payload: strCopy, type: ReducerActionsType.SET_URL });
//   };

//   useEffect(() => {
//     if (ResourceConfig.browser.homepageUrl) {
//       _setBrowserUrl(ResourceConfig.browser.homepageUrl)
//     }
//   }, [ResourceConfig.browser.homepageUrl]);

  return (
    <StyledAppWrapper>
      <AppContent className={classes.root}>
        <Box flexGrow={1}>
         {"Em breve, by GHDS"}
        </Box>
      </AppContent>
    </StyledAppWrapper>
  );
};
