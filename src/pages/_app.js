/** 🌹oddFEELING */

import NavLayout from '../layout/nav.layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/Theme';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
