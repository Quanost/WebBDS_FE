import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function RangeSlider() {
  const [value, setValue] = React.useState([50, 300]);
  const [start, end] = value;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleStartChange = ({ target }) => {
    const { value } = target;
    setValue((prev) => [value, prev.at(1)]);
  };

  const handleEndChange = ({ target }) => {
    const { value } = target;
    setValue((prev) => [prev.at(0), value]);
  };

  return (
    <Box sx={{ width: 300, padding: 5 }}>
      <Typography>
        Từ {start} đến {end} m²
      </Typography>
      <Stack direction="row" alignItems="center">
        <OutlinedInput onChange={handleStartChange} value={start} />
        <ArrowRightAltIcon />
        <OutlinedInput onChange={handleEndChange} value={end} />
      </Stack>

      <Slider
        min={0}
        max={500}
        step={1}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
    },
  },
};

export default function RangeArea() {
  return (
    <Select
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected}
      MenuProps={MenuProps}
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
      value="Diện tích"
    >
      <MenuItem disabled value="Diện tích"></MenuItem>
      <RangeSlider />
    </Select>
  );
}
