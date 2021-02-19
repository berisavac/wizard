import React from 'react';
import { ThemeProvider } from 'styled-components';

const size = {
  xs: '480px',
};
const theme = {
  colors: {
    stepsLight: '#d0d0d0',
    activeDark: '#5a6268',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fontSizes: {
    small: '1em',
    medium: '1.5em',
    large: '2em',
  },
  sizeDevice: {
    xs: `(max-width: ${size.xs})`,
    sm: `(min-width: ${size.xs})`,
  },
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
