// import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0091ea',
    },
    secondary: {
      main: '#0091ea',
    },
  },
});

const StyledHome = styled('div')({
  width: '100vw',
  height: '100vh',
});

const StyledMain = styled('div')({
  display: 'flex',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Header />
        <StyledMain>
          <SideBar />
          <Component {...pageProps} />
        </StyledMain>
      </StyledHome>
    </ThemeProvider>
  );
}
