import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { useImage } from "src/hooks";

const PlaceItem = ({ maxWidth = 550 }) => {
  const image = useImage([
    "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg",
    "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg",
    "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-3.jpg",
  ]);

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr"
        borderRadius="5px"
      >
        <img
          style={{
            gridColumn: "1/1",
            gridRow: "1/1",
            borderRadius: "5px",
            objectFit: "cover",
            maxWidth: maxWidth,
          }}
          src={image}
          alt="HCM-web"
        />
        <Box gridColumn="1/1" gridRow="1/1" padding="16px">
          <Typography color="#fff" fontWeight="bold" fontSize="18px">
            TP.HCM
          </Typography>
          <Typography color="#fff" fontSize="14px">
            52.064 tin đăng
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
PlaceItem.propTypes = {
  maxWidth: PropTypes.number,
};

const PlacesChip = () => {
  const places = [
    "Vinhomes Central Park",
    "Vinhomes Grand Park",
    "Vinhomes Smart City",
    "Vinhomes Ocean Park",
    "Vũng Tàu Pearl",
    "Bcons Green View",
    "Grandeur Palace",
    "Diamond Island",
    "HaDo Centrosa Garden",
    "The Sun Avenue",
    "Nhà đất Hải Phòng",
    "Nhà đất Quy Nhơn",
  ];
  return (
    <Box marginTop="32px">
      <Swiper slidesPerView={places.length / 2}>
        {places.map((place, index) => (
          <SwiperSlide key={`${place}-${index}`}>
            <Chip label={place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const RealEstateByLocation = () => {
  return (
    <Box style={{ backgroundColor: "#FAFAFA", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography
          fontSize="24px"
          fontWeight="bold"
          variant="h2"
          padding="20px 0"
        >
          Bất động sản theo địa điểm
        </Typography>
        <Grid container xs={12} spacing={4}>
          <Grid item xs={6}>
            <PlaceItem />
          </Grid>

          <Grid item xs={6}>
            <Grid container xs={12} spacing={4}>
              <Grid item xs={6}>
                <PlaceItem maxWidth={250} />
              </Grid>
              <Grid item xs={6}>
                <PlaceItem maxWidth={250} />
              </Grid>
              <Grid item xs={6}>
                <PlaceItem maxWidth={250} />
              </Grid>
              <Grid item xs={6}>
                <PlaceItem maxWidth={250} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <PlacesChip />
      </Container>
    </Box>
  );
};

export default RealEstateByLocation;
