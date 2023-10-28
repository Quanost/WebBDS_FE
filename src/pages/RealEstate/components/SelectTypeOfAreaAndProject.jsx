import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListAreaAndProject from "./ListAreaAndProject";

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

export default function SelectTypeOfAreaAndProject() {
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
      value="Khu vực & dự án"
    >
      <MenuItem disabled value="Khu vực & dự án"></MenuItem>
      <ListAreaAndProject />
    </Select>
  );
}
