import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import RealEstateSearchBox from "../RealEstate/components/RealEstateSearchBox";
import { AccountCircleOutlined } from "@mui/icons-material";
import AsideNav from "./AsideNav";

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

const RealEstateDetail = () => {
  return (
    <div id="RealEstateForSale-page">
      <RealEstateSearchBox searchType="sale" />
      <Container maxWidth="lg">
        <Grid
          container
          columns={{ xs: 12 }}
          spacing={2}
          justifyContent="center"
          marginTop={3}
        >
          <Grid item xs={7}>
            <Swiper navigation modules={[Navigation]} slidesPerView={1}>
              {places.map((place, index) => (
                <SwiperSlide key={`${place}-${index}`}>
                  <img
                    src="https://file4.batdongsan.com.vn/resize/1275x717/2023/10/10/20231010145114-f279_wm.jpg"
                    width="700px"
                    height="400px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Typography marginTop={2} fontSize="24px" fontWeight="bold">
              Bán căn hộ Q7 Riverside giá tốt (1PN 53m2 1.95 tỷ) (2PN 73m2 2,4
              tỷ) (3PN 86m2 3.8 tỷ) 0965 431 ***
            </Typography>

            <Typography marginTop={1} fontSize="14px" color="#2c2c2c">
              Dự án Q7 Saigon Riverside, Đường Đào Trí, Phường Phú Thuận, Quận
              7, Hồ Chí Minh
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              maxWidth="60%"
              marginTop={3}
            >
              <Box>
                <Typography fontSize="14px" color="#999999">
                  Mức giá
                </Typography>
                <Typography fontSize="18px" color="#2c2c2c" fontWeight={500}>
                  2,4 tỷ
                </Typography>
                <Typography fontSize="12px" color="#505050">
                  ~32,88 triệu/m²
                </Typography>
              </Box>
              <Box>
                <Typography fontSize="14px" color="#999999">
                  Diện tích
                </Typography>
                <Typography fontSize="18px" color="#2c2c2c" fontWeight={500}>
                  73 /m²
                </Typography>
              </Box>
              <Box>
                <Typography fontSize="14px" color="#999999">
                  Phòng ngủ
                </Typography>
                <Typography fontSize="18px" color="#2c2c2c" fontWeight={500}>
                  2PN
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ margin: "32px 0" }} />

            <Typography fontSize="18px" fontWeight="bold" marginBottom={2}>
              Thông tin mô tả
            </Typography>

            <Typography marginBottom={3} fontSize="14px">
              Căn hộ Q7 Riverside là căn chung cư cao cấp, an ninh 24/24, với
              thiết kế thông minh, bạn có thể trải nghiệm một cuộc sống tốt
              nhất, chung cư nằm ở vị trí đắc địa, giao thông thuận lợi, có đầy
              đủ tiện nghi.
            </Typography>

            <Typography marginBottom={3} fontSize="14px">
              Căn hộ Q7 Riverside là căn chung cư cao cấp, an ninh 24/24, với
              thiết kế thông minh, bạn có thể trải nghiệm một cuộc sống tốt
              nhất, chung cư nằm ở vị trí đắc địa, giao thông thuận lợi, có đầy
              đủ tiện nghi.
            </Typography>

            <Box marginBottom={3}>
              <Typography fontSize="14px">Thiết kế căn hộ:</Typography>
              <Typography fontSize="14px">1PN - 53m² giá 1.8 tỷ.</Typography>
              <Typography fontSize="14px">
                2PN - 68 - 73m² giá 2,4 tỷ.
              </Typography>
              <Typography fontSize="14px">3PN - 86m² giá 3.8 tỷ.</Typography>
            </Box>

            <Box marginBottom={3}>
              <Typography fontSize="14px">
                View sông, Quận 7, Quận 1, nội khu công viên hồ bơi đều có.
              </Typography>
              <Typography fontSize="14px">
                Tầng thấp/trung/cao tùy nhu cầu.
              </Typography>
              <Typography fontSize="14px">
                Nội thất cơ bản hoặc đầy đủ.
              </Typography>
            </Box>

            <Box marginBottom={3}>
              <Typography fontSize="14px">
                Văn phòng em ở tại Q7 Riverside, nắm căn giá tốt.
              </Typography>
              <Typography fontSize="14px">
                Thương lượng phù hợp nhu cầu.
              </Typography>
              <Typography fontSize="14px">Tư vấn chuẩn pháp lý.</Typography>
            </Box>

            <Box marginBottom={3}>
              <Typography fontSize="14px">
                - Phòng ngủ trong mỗi căn hộ đều có cửa sổ lớn, hướng ra không
                gian ngoài trời đón ánh sáng, gió tự nhiên.
              </Typography>
              <Typography fontSize="14px">
                - Khu bếp và phòng khách được tách riêng biệt và có sân phơi
                riêng.
              </Typography>
              <Typography fontSize="14px">
                Hướng Đông - bình minh trên sông.
              </Typography>
              <Typography fontSize="14px">
                Hướng Bắc - sầm uất với hướng cầu Phú Mỹ và Cảng lớn tấp nập.
              </Typography>
              <Typography fontSize="14px">
                Hướng Tây - hướng về khu đô thị kiểu mẫu Phú Mỹ Hưng.
              </Typography>
              <Typography fontSize="14px">
                Hướng Nam - vùng sông lớn và mảng xanh thành phố.
              </Typography>
            </Box>

            <Box marginBottom={3}>
              <Stack direction="row" alignItems="center">
                <Typography fontSize="14px">LH em 0965 431 ***.</Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    fontSize: "14px",
                    width: "fit-content",
                    backgroundColor: "#009BA1",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Hiện số
                </Button>
              </Stack>
              <Typography fontSize="14px" marginTop={1}>
                Em cảm ơn anh chị đã xem tin.
              </Typography>
            </Box>

            <Box>
              <Typography fontSize="18px" fontWeight="bold" marginBottom={2}>
                Đặc điểm bất động sản
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                maxWidth="80%"
                marginTop={3}
              >
                <Box>
                  <Typography fontSize="14px" color="#999999">
                    Mức giá
                  </Typography>
                  <Typography fontSize="14px" color="#2c2c2c" fontWeight={500}>
                    2,4 tỷ
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize="14px" color="#999999">
                    Diện tích
                  </Typography>
                  <Typography fontSize="14px" color="#2c2c2c" fontWeight={500}>
                    73 /m²
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize="14px" color="#999999">
                    Phòng ngủ
                  </Typography>
                  <Typography fontSize="14px" color="#2c2c2c" fontWeight={500}>
                    2PN
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize="14px" color="#999999">
                    Số toilet
                  </Typography>
                  <Typography fontSize="14px" color="#2c2c2c" fontWeight={500}>
                    2 phòng
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              boxShadow={1}
              border="1px solid #F2F2F2"
              borderRadius="8px"
              padding="15px"
              marginBottom={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <AccountCircleOutlined sx={{ width: 64, height: 64 }} />
              <Typography fontSize="12px" color="#999999" marginBottom={1}>
                Được đăng bởi
              </Typography>
              <Typography
                fontSize="16px"
                color="#2c2c2c"
                fontWeight="500"
                marginBottom={2}
              >
                Gấu mèo Bắc Mỹ
              </Typography>

              <Button
                variant="contained"
                fontSize="14px"
                sx={{
                  minWidth: "190px",
                  marginBottom: 1,
                  backgroundColor: "#009BA1",
                  border: "1px solid #009BA1",
                  padding: "5px 15px",
                }}
              >
                0965 431 *** · Hiện số
              </Button>
              <Button
                fontSize="14px"
                sx={{
                  minWidth: "190px",
                  color: "#000000",
                  border: "1px solid #cccccc",
                }}
              >
                Yêu cầu liên hệ lại
              </Button>
            </Box>

            <AsideNav />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RealEstateDetail;
