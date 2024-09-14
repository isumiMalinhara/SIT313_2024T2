import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            align="center"
            gutterBottom
          >
            Dev @ Deakin
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Some footer content goes here.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 1
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 2
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Link 3
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              href="https://facebook.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <LinkedIn />
            </IconButton>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 2, color: '' }}
            >
            {"© "}
            {new Date().getFullYear()}
            {" Dev @ Deakin. All rights reserved."}
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
