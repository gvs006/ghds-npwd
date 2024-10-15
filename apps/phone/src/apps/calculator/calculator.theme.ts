import { blue, common } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const CALCULATOR_APP_PRIMARY_COLOR = blue[500];
export const CALCULATOR_APP_TEXT_COLOR = common.white;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: CALCULATOR_APP_PRIMARY_COLOR,
      dark: blue[700],
      light: blue[300],
      contrastText: CALCULATOR_APP_TEXT_COLOR,
    },
    secondary: {
      main: '#d32f2f',
      light: '#eb4242',
      dark: '#941212',
      contrastText: CALCULATOR_APP_TEXT_COLOR,
    },
    success: {
      main: '#2196f3',
      contrastText: CALCULATOR_APP_TEXT_COLOR,
    },
  },
};

export default theme;
