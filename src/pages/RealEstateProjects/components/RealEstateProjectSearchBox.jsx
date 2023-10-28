import React from "react";
import {
  Box,
  Container,
  Divider,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import RangePrice from "./RangePrice";
import { Search } from "@mui/icons-material";

const RealEstateProjectSearchBox = () => {
  const [paddingTop, setPaddingTop] = React.useState(100);

  const searchBoxRef = React.useRef(null);

  React.useLayoutEffect(() => {
    setPaddingTop(searchBoxRef.current?.clientHeight);
  }, []);

  return (
    <>
      <Box
        ref={searchBoxRef}
        position="fixed"
        zIndex={100}
        style={{ backgroundColor: "#fff", width: "100%" }}
        boxShadow="0px 4px 10px rgba(182,182,182,0.18)"
      >
        <Divider sx={{ borderColor: "#F2F2F2" }} />

        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <OutlinedInput
              placeholder="Tìm dự án"
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
            <Select
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                ".MuiSvgIcon-root": {
                  fill: "#000",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
              }}
              value="Khu Vực"
            >
              <MenuItem value="Khu Vực">Khu Vực</MenuItem>
              <MenuItem value="HN">HN</MenuItem>
              <MenuItem value="HCM">HCM</MenuItem>
            </Select>

            <Select
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                ".MuiSvgIcon-root": {
                  fill: "#000",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
              }}
              value="Loại hình"
            >
              <MenuItem value="Loại hình">Loại hình</MenuItem>
              <MenuItem value="Căn hộ chung cư">Căn hộ chung cư</MenuItem>
              <MenuItem value="Cao ốc văn phòng">Cao ốc văn phòng</MenuItem>
            </Select>

            <RangePrice />

            <Select
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                ".MuiSvgIcon-root": {
                  fill: "#000",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
              }}
              value="Trạng thái"
            >
              <MenuItem value="Trạng thái">Trạng thái</MenuItem>
              <MenuItem value="Căn hộ chung cư">Sắp mở bán</MenuItem>
              <MenuItem value="Đang mở bán">Đang mở bán</MenuItem>
              <MenuItem value="Đã bàn giao">Đã bàn giao</MenuItem>
            </Select>
          </Stack>
        </Container>
      </Box>

      <Divider
        sx={{ borderColor: "#F2F2F2" }}
        style={{
          border: "unset",
          paddingTop: paddingTop,
        }}
      />
    </>
  );
};

export default RealEstateProjectSearchBox;
