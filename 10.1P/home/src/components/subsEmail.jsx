import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/subscribeAction", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (response.ok) {
        alert("Welcome email sent!");
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Divider style={{ margin: "10px 0" }} />
        <Container
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, textAlign: "center", margin: "20px", color: '' }}
          >
            Subscribe to our Newsletter
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: '' } }}
              InputProps={{ style: { color: '' } }}
            />
            <Button type="submit" variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Container>
        <Divider style={{ margin: "10px 0" }} />
      </Container>
    </ThemeProvider>
  );
}