import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import Dashboard from "./components/Dashboard";

const defaultProps = {
  options: [
    {
      title: "Loại 1",
      value: "loai-1",
    },
    {
      title: "Loại 2",
      value: "loai-2",
    },
  ],
  getOptionLabel: (option) => option.title,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PostingManagement = () => {
  return (
    <Dashboard>
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Card>
          <CardContent>
            <Stack direction="column" gap={3}>
              <Typography fontSize="24px" color="#2c2c2c" fontWeight="bold">
                Thông tin cơ bản
              </Typography>

              <Stack direction="row" width="100%">
                <RadioGroup
                  defaultValue="rent"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <FormControlLabel
                    sx={{
                      flex: 1,
                      margin: 0,
                      ".MuiButtonBase-root.MuiRadio-root": {
                        display: "none",
                      },
                      ".MuiButtonBase-root.MuiRadio-root + .MuiTypography-root":
                        {
                          fontSize: 14,
                          color: "#999999",
                          padding: "5px 20px",
                          borderRadius: "4px",
                          border: "1px solid #999",
                          width: "100%",
                          textAlign: "center",
                          fontWeight: "bold",
                          "&:hover": {
                            color: "#000",
                            backgroundColor: "#f2f2f2",
                          },
                        },
                      ".MuiButtonBase-root.MuiRadio-root.Mui-checked + .MuiTypography-root":
                        {
                          color: "#fff",
                          backgroundColor: "#505050",
                        },
                    }}
                    value="sale"
                    control={<Radio />}
                    label="Bán"
                  />
                  <FormControlLabel
                    sx={{
                      flex: 1,
                      margin: 0,
                      ".MuiButtonBase-root.MuiRadio-root": {
                        display: "none",
                      },
                      ".MuiButtonBase-root.MuiRadio-root + .MuiTypography-root":
                        {
                          fontSize: 14,
                          color: "#999999",
                          padding: "5px 20px",
                          borderRadius: "4px",
                          border: "1px solid #999",
                          width: "100%",
                          textAlign: "center",
                          fontWeight: "bold",
                          "&:hover": {
                            color: "#2c2c2c",
                            backgroundColor: "#f2f2f2",
                          },
                        },
                      ".MuiButtonBase-root.MuiRadio-root.Mui-checked + .MuiTypography-root":
                        {
                          color: "#fff",
                          backgroundColor: "#505050",
                        },
                    }}
                    value="rent"
                    control={<Radio />}
                    label="Cho thuê"
                  />
                </RadioGroup>
              </Stack>

              <FormControl required fullWidth>
                <FormLabel>Loại bất động sản</FormLabel>
                <Autocomplete
                  {...defaultProps}
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="VD: Nhà riêng"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Chọn nhanh địa chỉ</FormLabel>
                <OutlinedInput placeholder="Tìm nhanh" size="small" />
              </FormControl>

              <Stack direction="row" gap={2}>
                <FormControl required fullWidth>
                  <FormLabel>Tỉnh, thành phố</FormLabel>
                  <Autocomplete
                    {...defaultProps}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="VD: Nhà riêng"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </FormControl>
                <FormControl required fullWidth>
                  <FormLabel>Quận, huyện</FormLabel>
                  <Autocomplete
                    {...defaultProps}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="VD: Nhà riêng"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </FormControl>
              </Stack>

              <Stack direction="row" gap={2}>
                <FormControl required fullWidth>
                  <FormLabel>Phường, xã</FormLabel>
                  <Autocomplete
                    {...defaultProps}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="VD: Nhà riêng"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </FormControl>
                <FormControl required fullWidth>
                  <FormLabel>Đường, phố</FormLabel>
                  <Autocomplete
                    {...defaultProps}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="VD: Nhà riêng"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </FormControl>
              </Stack>

              <FormControl required fullWidth>
                <FormLabel>Dự án</FormLabel>
                <Autocomplete
                  {...defaultProps}
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="VD: Nhà riêng"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Địa chỉ hiển thị trên tin đăng</FormLabel>
                <Autocomplete
                  {...defaultProps}
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="VD: Nhà riêng"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack direction="column" gap={3}>
              <Typography fontSize="24px" color="#2c2c2c" fontWeight="bold">
                Thông tin bài viết
              </Typography>
              <FormControl required fullWidth>
                <FormLabel>Tiêu đề</FormLabel>
                <TextField
                  multiline
                  minRows={2}
                  maxRows={20}
                  placeholder="Tiêu đề"
                />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Mô tả</FormLabel>
                <TextField
                  multiline
                  minRows={5}
                  maxRows={20}
                  placeholder="Mô tả"
                />
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack direction="column" gap={3}>
              <Typography fontSize="24px" color="#2c2c2c" fontWeight="bold">
                Thông tin bất động sản
              </Typography>
              <FormControl required fullWidth>
                <FormLabel>Diện tích</FormLabel>
                <TextField size="small" placeholder="Diện tích" />
              </FormControl>

              <Stack direction="row" gap={2}>
                <FormControl sx={{ flex: 8 }} required fullWidth>
                  <FormLabel>Mức giá</FormLabel>
                  <TextField size="small" placeholder="Mức giá" />
                </FormControl>

                <FormControl sx={{ flex: 2 }} required fullWidth>
                  <FormLabel>Đơn vị</FormLabel>
                  <Autocomplete
                    {...defaultProps}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="VD: Nhà riêng"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack direction="column" gap={3}>
              <Typography fontSize="24px" color="#2c2c2c" fontWeight="bold">
                Hình ảnh & video
              </Typography>
              <Box>
                <Typography>
                  • Đăng tối thiểu 4 ảnh thường với tin VIP
                </Typography>
                <Typography>
                  • Đăng tối đa 24 ảnh với tất cả các loại tin
                </Typography>
                <Typography>
                  • Hãy dùng ảnh thật, không trùng, không chèn SĐT
                </Typography>
                <Typography>
                  • Mỗi ảnh kích thước tối thiểu 100x100 px, tối đa 15 MB
                </Typography>
                <Typography>• Mô tả ảnh tối đa 45 kí tự.</Typography>
              </Box>

              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack direction="column" gap={3}>
              <Typography fontSize="24px" color="#2c2c2c" fontWeight="bold">
                Thông tin liên hệ
              </Typography>
              <FormControl required fullWidth>
                <FormLabel>Tên liên hệ</FormLabel>
                <TextField size="small" placeholder="Tên liên hệ" />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Số điện thoại</FormLabel>
                <TextField size="small" placeholder="Số điện thoại" />
              </FormControl>

              <FormControl required fullWidth>
                <FormLabel>Email</FormLabel>
                <TextField size="small" placeholder="Email" />
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        <Stack>
          <Button variant="contained">Đăng tin</Button>
        </Stack>
      </Container>
    </Dashboard>
  );
};

export default PostingManagement;
