import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { AuthProvider } from './contexts/auth';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { usePersistedState } from './utils/usePersistedState';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
