// import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import PhoneAndroidOutlined from "@mui/icons-material/PhoneAndroidOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const RealEstateCard = () => {
  return (
    <Card
      component={Link}
      to="/detail/Bán%20căn%20hộ%20Q7%20Riverside%20giá%20tốt"
      sx={{
        boxShadow: "0px 4px 6px 0px rgba(44,44,44,0.04)",
        border: "1px solid #F2F2F2",
        textDecoration: "none",
      }}
    >
      <Grid container xs={12}>
        <Grid item xs={8}>
          <img
            src="https://file4.batdongsan.com.vn/crop/562x284/2023/10/24/20231024155100-01dd_wm.jpg"
            title="green iguana"
          />
        </Grid>
        <Grid item xs={4} display="flex" flexDirection="row" flexWrap="wrap">
          <img
            width="283px"
            src="https://file4.batdongsan.com.vn/crop/283x141/2023/10/24/20231024155108-4b35_wm.jpg"
          />
          <img
            width="140px"
            src="https://file4.batdongsan.com.vn/crop/140x140/2023/10/24/20231024155616-0368_wm.jpg"
          />
          <img
            width="140px"
            src="https://file4.batdongsan.com.vn/crop/140x140/2023/10/24/20231024155616-4062_wm.jpg"
          />
        </Grid>
      </Grid>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="14px"
          fontWeight="bold"
          color="#2C2C2C"
        >
          Căn Hộ Cao Cấp Sun Cosmo View Sông Hàn, View Biển và Thành Phố Giá Từ
          2 Tỷ/căn CK đến 21%
        </Typography>
        <Stack direction="row" alignItems="baseline" gap={1}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize="16px"
            color="#E03C31"
            fontWeight="bold"
          >
            2 tỷ
          </Typography>
          <span>·</span>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize="16px"
            color="#E03C31"
            fontWeight="bold"
          >
            50,82 m²
          </Typography>
          <span>·</span>

          <Typography
            fontSize="14px"
            gutterBottom
            variant="h5"
            component="div"
            color="#505050"
          >
            39,35 tr/m²
          </Typography>
          <span>·</span>

          <Typography
            fontSize="14px"
            gutterBottom
            variant="h5"
            component="div"
            color="#505050"
            display="flex"
            flexDirection="row"
            alignItems="baseline"
          >
            1 <HotelOutlinedIcon />
          </Typography>
          <span>·</span>
          <Typography
            fontSize="14px"
            gutterBottom
            variant="h5"
            component="div"
            color="#505050"
            display="flex"
            flexDirection="row"
            alignItems="baseline"
          >
            1 <BathtubOutlinedIcon />
          </Typography>
          <span>·</span>
          <Typography
            fontSize="14px"
            gutterBottom
            variant="h5"
            component="div"
            color="#505050"
          >
            Ngũ Hành Sơn, Đà Nẵng
          </Typography>
        </Stack>
        <Typography variant="body2" color="#505050" fontSize="14px">
          Sun Cosmo Residence có vị trí tọa lạc tại tuyến đường Trần Thị Lý,
          phường Bắc Mỹ Phú, quận Ngũ Hành Sơn, thành phố Đà Nẵng, 1 dự án mới
          của chủ đầu tư Sungroup. Dự án sở hữu tầm view 3 trong 1: view biển Mỹ
          khê, view Sông Hàn và view Thành phố Đà Nẵng.Dự án sở hữu hệ thống
          giao thông thuận lợi khi nằm liền kề Quốc lộ 14B và cây cầu Trần Thị
          Lý nối liền 2 quận Hải Châu và Ngũ Hành Sơn ngăn cách bởi Sông Hàn.Sun
          Cosmo Residence được quy hoạch với t...
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <AccountCircleOutlined style={{ width: 32, height: 32 }} />
            <Box>
              <Typography fontSize="12px" color="#2c2c2c">
                Nguyễn Thị Việt Hà
              </Typography>
              <Typography fontSize="12px" color="#999999">
                Đăng hôm nay
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <Button
              sx={{
                color: "#ffffff",
                backgroundColor: "#009688",
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#009688",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <PhoneAndroidOutlined />
              <span>0333****98</span>
              <span>·</span>
              <span>Hiện số</span>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                borderColor: "#000",
                "&:hover": {
                  color: "#000",
                  backgroundColor: "#fff",
                  borderColor: "#000",
                },
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

RealEstateCard.propTypes = {};

export default RealEstateCard;
