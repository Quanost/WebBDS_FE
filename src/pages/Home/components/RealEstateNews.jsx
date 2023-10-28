import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

import { Box, Container, Stack, Typography } from "@mui/material";

const News = ({ index }) => {
  return (
    <Box>
      <img
        style={{ width: 360 }}
        src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/TA_PR-20231020-BDS.com_.vn_Hinh-minh-hoa-1.jpg"
      />
      <Stack direction="row" maxWidth="360px" alignItems="center" gap={0.5}>
        <Typography fontSize="40px" fontWeight="bold">
          {Number(index) < 10 && "0"}
          {index}
        </Typography>
        <Typography fontSize="16px" fontWeight="500">
          Mua Căn Hộ The Privia - Khang Điền, Chọn Đơn Vị Phân Phối Uy Tín T&A
          Corp
        </Typography>
      </Stack>
    </Box>
  );
};
News.propTypes = {
  index: PropTypes.number,
};

const RealEstateNews = () => {
  return (
    <Box style={{ backgroundColor: "#FAFAFA", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography
          fontSize="24px"
          fontWeight="bold"
          variant="h2"
          padding="20px 0"
        >
          Tin tức bất động sản
        </Typography>

        <Box
          sx={{
            ".news-navigation :is(.swiper-button-prev, .swiper-button-next)": {
              color: "red",
            },
          }}
        >
          <Swiper
            className="news-navigation"
            // navigation
            // modules={[Navigation]}
            slidesPerView={3}
          >
            {["n1", "n2", "n3", "n4", "n5"].map((item, index) => (
              <SwiperSlide key={item}>
                <News index={index + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default RealEstateNews;
