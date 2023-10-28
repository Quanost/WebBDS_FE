import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function priceNumberToTextPrice(paramPrice) {
  // convert
  const price = Number(paramPrice + "000000");

  if (price < 1000) {
    return price.toString();
  } else if (price < 10000) {
    return price / 1000 + " triệu";
  } else if (price < 1000000) {
    return price / 1000 + " nghìn";
  } else if (price < 1000000000) {
    return price / 1000000 + " triệu";
  } else if (price < 1000000000000) {
    return price / 1000000000 + " tỷ";
  } else {
    return price.toString();
  }
}

function RangeSlider() {
  const [value, setValue] = React.useState([12000, 35000]);
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
        Từ {priceNumberToTextPrice(start)} đến {priceNumberToTextPrice(end)}
      </Typography>
      <Stack direction="row" alignItems="center">
        <OutlinedInput onChange={handleStartChange} value={start} />
        <ArrowRightAltIcon />
        <OutlinedInput onChange={handleEndChange} value={end} />
      </Stack>

      <Slider
        min={0}
        max={60000}
        step={100}
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

export default function RangePrice() {
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
      value="Mức giá"
    >
      <MenuItem disabled value="Mức giá"></MenuItem>
      <RangeSlider />
    </Select>
  );
}
