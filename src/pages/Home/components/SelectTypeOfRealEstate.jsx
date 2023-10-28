import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { InputAdornment } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectTypeOfRealEstate() {
  const [personName, setPersonName] = React.useState(["Loại nhà đất"]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Select
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected.join(", ")}
      MenuProps={MenuProps}
      startAdornment={
        <InputAdornment position="start">
          <HouseOutlinedIcon />
        </InputAdornment>
      }
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
      label="Age"
    >
      <MenuItem value="Loại nhà đất"></MenuItem>
      <MenuItem value="Tất cả nhà đất">
        <HouseOutlinedIcon />
        <ListItemText primary="Tất cả nhà đất" />
        <Checkbox checked={personName.indexOf("Tất cả nhà đất") > -1} />
      </MenuItem>
      <MenuItem value="Căn hộ chung cư">
        <ApartmentOutlinedIcon />
        <ListItemText primary="Căn hộ chung cư" />
        <Checkbox checked={personName.indexOf("Căn hộ chung cư") > -1} />
      </MenuItem>
    </Select>
  );
}
