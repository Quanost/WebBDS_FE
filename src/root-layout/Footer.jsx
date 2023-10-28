import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import SendOutlined from "@mui/icons-material/SendOutlined";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import HeadsetOutlined from "@mui/icons-material/HeadsetOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneInTalkOutlined from "@mui/icons-material/PhoneInTalkOutlined";

import {
  Box,
  Container,
  Divider,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#f2f2f2", padding: "50px 0" }}>
      <Container maxWidth="lg" display="flex">
        <Stack direction="column" gap={3}>
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                flex: 1,
                minWidth: 400,
              }}
              to="/"
            >
              <img
                height={60}
                src="https://staticfile.batdongsan.com.vn/images/logo/standard/black/logo_gray-5.svg"
                alt="Website số 1 về bất động sản"
                title="Batdongsan.com.vn"
              />
            </Link>
            <Stack flex="1" direction="row" alignItems="center" gap={2}>
              <PhoneInTalkOutlined sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography style={{ margin: 0, fontSize: 12 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:19001881"
                  >
                    Hotline
                  </a>
                </Typography>
                <Typography style={{ margin: 0, fontSize: 14 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:19001881"
                  >
                    1900 1881
                  </a>
                </Typography>
              </Box>
            </Stack>

            <Stack flex="1" direction="row" alignItems="center" gap={2}>
              <PermIdentityIcon sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography style={{ margin: 0, fontSize: 12 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="mailto:trogiup.batdongsan.com.vn"
                  >
                    Hỗ trợ khách hàng
                  </a>
                </Typography>
                <Typography style={{ margin: 0, fontSize: 14 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="mailto:trogiup.batdongsan.com.vn"
                  >
                    trogiup.batdongsan.com.vn
                  </a>
                </Typography>
              </Box>
            </Stack>

            <Stack flex="1" direction="row" alignItems="center" gap={2}>
              <HeadsetOutlined sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography style={{ margin: 0, fontSize: 12 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="mailto:hotro@batdongsan.com.vn"
                  >
                    Chăm sóc khách hàng
                  </a>
                </Typography>
                <p style={{ margin: 0, fontSize: 14 }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="mailto:hotro@batdongsan.com.vn"
                  >
                    hotro@batdongsan.com.vn
                  </a>
                </p>
              </Box>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="space-between" gap={5}>
            <Stack flex="1" gap={2} minWidth={400}>
              <Typography fontSize="14px">
                CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM
              </Typography>
              <Typography display="flex" alignItems="center" fontSize="14px">
                <LocationOnOutlined />
                Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
              </Typography>
              <Typography display="flex" alignItems="center" fontSize="14px">
                <PhoneInTalkOutlined />
                (024) 3562 5939 - (024) 3562 5940
              </Typography>
            </Stack>
            <Box flex="1">
              <Typography fontSize="14px" fontWeight="500">
                HƯỚNG DẪN
              </Typography>
              <Typography fontSize="14px">Về chúng tôi</Typography>
              <Typography fontSize="14px">Báo giá & hỗ trợ</Typography>
              <Typography fontSize="14px">Câu hỏi thường gặp</Typography>
              <Typography fontSize="14px">Góp ý báo lỗi</Typography>
              <Typography fontSize="14px">Sitemap</Typography>
            </Box>

            <Box flex="1">
              <Typography fontSize="14px" fontWeight="500">
                QUY ĐỊNH
              </Typography>
              <Typography fontSize="14px">Quy định đăng tin</Typography>
              <Typography fontSize="14px">Quy chế hoạt động</Typography>
              <Typography fontSize="14px">Điều khoản thỏa thuận</Typography>
              <Typography fontSize="14px">Chính sách bảo mật</Typography>
              <Typography fontSize="14px">Giải quyết khiếu nại</Typography>
            </Box>
            <Stack flex="1">
              <Typography fontSize="14px" fontWeight="500">
                ĐĂNG KÝ NHẬN TIN
              </Typography>
              <OutlinedInput
                style={{
                  width: 350,
                  backgroundColor: "#fff",
                }}
                variant="outlined"
                placeholder="Nhập email của bạn"
                endAdornment={
                  <InputAdornment position="end">
                    <SendOutlined />
                  </InputAdornment>
                }
              />
            </Stack>
          </Stack>

          <Stack direction="row">
            <Stack direction="row" flex="1" alignItems="flex-end" gap={3}>
              <img
                style={{ width: 111, height: 26 }}
                src="https://staticfile.batdongsan.com.vn/images/mobile/footer/google-play.png"
              />
              <img
                style={{ width: 111, height: 33 }}
                src="https://staticfile.batdongsan.com.vn/images/mobile/footer/app_store.png"
              />
            </Stack>
            <Stack>
              <Typography fontSize="14px" fontWeight="500">
                QUỐC GIA & NGÔN NGỮ
              </Typography>
              <Select
                defaultValue={1}
                style={{
                  backgroundColor: "#fff",
                }}
                size="small"
              >
                <MenuItem value={1}>
                  <Stack direction="row" alignItems="center">
                    <PublicIcon />
                    <Typography>Việt Nam</Typography>
                  </Stack>
                </MenuItem>
              </Select>
            </Stack>
          </Stack>
        </Stack>

        <Box padding="30px 0">
          <Divider />
        </Box>

        <Stack direction="row" gap={5}>
          <Box flex="4">
            <Typography fontSize="12px">
              Copyright © 2007 - 2023 Batdongsan.com.vn
            </Typography>
            <Typography fontSize="12px">
              Giấy ĐKKD số 0104630479 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
              02/06/2010 Giấy phép thiết lập trang thông tin điện tử tổng hợp
              trên mạng số 191/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 31/08/2023
            </Typography>
          </Box>
          <Typography flex="4" fontSize="12px">
            Chịu trách nhiệm nội dung GP ICP: Bà Đặng Thị Hường Chịu trách nhiệm
            sàn GDTMĐT: Ông Bạch Dương Quy chế, quy định giao dịch có hiệu lực
            từ 08/08/2023 Ghi rõ nguồn &ldquo;Batdongsan.com.vn&rdquo; khi phát
            hành lại thông tin từ website này.
          </Typography>
          <Stack flex="1" justifyContent="center" alignItems="center">
            <img src="https://staticfile.batdongsan.com.vn/images/newhome/da-dang-ki-bct.svg" />
          </Stack>
          <Stack flex="1" direction="row" alignItems="center">
            <Facebook />
            <YouTube />
            <Instagram />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
