import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedArticles from './components/Articles';
import Footer from './components/Footer';
import HeaderImg from './components/HeaderImg';
import NavBar from './components/NavBar';
import SubscribeForm from './components/subsEmail';
import FeaturedTutorials from './components/Tutorials';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
        <NavBar />
        <HeaderImg />
        <FeaturedArticles />
        <FeaturedTutorials />
        <SubscribeForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;