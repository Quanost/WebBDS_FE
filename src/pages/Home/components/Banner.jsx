import { Box, Container } from "@mui/material";
import BannerLabTabs from "./BannerLabTabs";

const Banner = () => {
  return (
    <Box backgroundColor="#e03c31">
      <Container maxWidth="md" style={{ padding: "100px" }}>
        <BannerLabTabs />
      </Container>
    </Box>
  );
};

export default Banner;
