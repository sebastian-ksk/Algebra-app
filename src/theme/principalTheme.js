import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const principalTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      blueButtons: '#12324F',
      orangeSwitch: '82B428',
      cardMeter: '#E6E6E6',
      logout: red.A400,
    },
    secondary: {
      main: '#543884',
    },

    grayIcons: {
      main: '#ABABAB',
    },
    blueGoogle: {
      main: '#2D9BF0',
    },
    blueITpeople: {
      main: '#12324F',
    },
    orangeSwitch: {
      main: '#82B428',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    tittleRegister: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});
