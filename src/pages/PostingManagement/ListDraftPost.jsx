import {
  Autocomplete,
  Box,
  Divider,
  FormControl,
  FormLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Dashboard from "./components/Dashboard";
import DraftPostTable from "./components/DraftPostTable";

const defaultProps = {
  options: [
    {
      title: "Mặc định",
      value: "0",
    },
    {
      title: "1 tuần qua",
      value: "1",
    },
    {
      title: "30 ngày qua",
      value: "30",
    },
  ],
  getOptionLabel: (option) => option.title,
};

const defaultPropsPostTypes = {
  options: [
    {
      title: "Tất cả",
      value: "all",
    },
    {
      title: "Cho thuê",
      value: "rent",
    },
    {
      title: "Bán",
      value: "sale",
    },
  ],
  getOptionLabel: (option) => option.title,
};

const defaultPropsProvinces = {
  options: [
    {
      title: "Tất cả",
      value: "all",
    },
    {
      title: "HN",
      value: "hn",
    },
    {
      title: "HCM",
      value: "hcm",
    },
  ],
  getOptionLabel: (option) => option.title,
};

const ListDraftPost = () => {
  return (
    <Dashboard>
      <Typography
        fontSize="24px"
        color="#2c2c2c"
        fontWeight="bold"
        marginBottom={2}
      >
        Tin nháp
      </Typography>

      <Stack direction="row" justifyContent="space=between" gap={2}>
        <FormControl required fullWidth>
          <FormLabel>Tìm theo mã tin, tiêu đề</FormLabel>
          <OutlinedInput placeholder="Tìm theo mã tin, tiêu đề" size="small" />
        </FormControl>

        <FormControl required fullWidth>
          <FormLabel>Thời gian đăng</FormLabel>
          <Autocomplete
            {...defaultProps}
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="VD: 30 ngày trước"
                variant="outlined"
                size="small"
              />
            )}
          />
        </FormControl>

        <FormControl required fullWidth>
          <FormLabel>Loại tin</FormLabel>
          <Autocomplete
            {...defaultPropsPostTypes}
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="VD: Cho thuê"
                variant="outlined"
                size="small"
              />
            )}
          />
        </FormControl>

        <FormControl required fullWidth>
          <FormLabel>Tỉnh thành</FormLabel>
          <Autocomplete
            {...defaultPropsProvinces}
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="VD: HCM"
                variant="outlined"
                size="small"
              />
            )}
          />
        </FormControl>
      </Stack>

      <Box marginBottom={3} marginTop={3}>
        <Divider sx={{ borderColor: "#000" }} />
      </Box>

      <DraftPostTable />
    </Dashboard>
  );
};

export default ListDraftPost;
