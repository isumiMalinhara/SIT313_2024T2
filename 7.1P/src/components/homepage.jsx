import { Box } from "@mui/material";
import NavBar from "./home/NavBar";
import HeaderImg from "./home/HeaderImg";
import FeaturedArticles from "./home/Articles";
import FeaturedTutorials from "./home/Tutorials";
import SubscribeForm from "./home/subsEmail";
import Footer from "./home/Footer";

const HomePage = () => {
  return (
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <HeaderImg />
        <FeaturedArticles />
        <FeaturedTutorials />
        <SubscribeForm />
        <Footer />
      </Box>
  );
};

export default HomePage;
