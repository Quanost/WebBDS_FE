import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SelectTypeOfRealEstate from "./SelectTypeOfRealEstate";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const TabStyled = styled(
  Tab,
  {}
)((styles) => ({
  ...styles.theme,
  color: "rgba(0,0,0,0.6)",
  backgroundColor: "rgba(255,255,255,0.8)",
}));

export default function BannerLabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList
            sx={{
              ".MuiButtonBase-root.MuiTab-root.Mui-selected": {
                fontSize: "14px",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.6)",
              },
            }}
            indicatorColor="unset"
            onChange={handleChange}
          >
            <TabStyled
              disableFocusRipple
              disableTouchRipple
              disableRipple
              label="Nhà đất bán"
              value="1"
              style={{
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                padding: 10,
              }}
            />
            <TabStyled
              disableFocusRipple
              disableTouchRipple
              disableRipple
              label="Nhà đất cho thuê"
              value="2"
              style={{
                marginLeft: 10,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                padding: 10,
              }}
            />
            <TabStyled
              disableFocusRipple
              disableTouchRipple
              disableRipple
              label="Dự án"
              value="3"
              style={{
                marginLeft: 10,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                padding: 10,
              }}
            />
          </TabList>
        </Box>

        <TabPanel
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          value="1"
        >
          <TabPanelForm placeholder="Tìm nhanh Nhà Đất Bán" />
        </TabPanel>
        <TabPanel
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          value="2"
        >
          <TabPanelForm placeholder="Tìm nhanh Nhà Đất Cho Thuê" />
        </TabPanel>
        <TabPanel
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          value="3"
        >
          <TabPanelForm placeholder="Tìm nhanh Dự Án" />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const TabPanelForm = ({ placeholder = "Tìm nhanh" }) => {
  return (
    <Box color="white">
      <Stack direction="row">
        <SelectTypeOfRealEstate />
        <OutlinedInput
          style={{
            flex: 1,
            width: 350,
            backgroundColor: "#fff",
          }}
          variant="outlined"
          placeholder={placeholder}
          endAdornment={
            <InputAdornment
              position="end"
              style={{
                color: "#fff",
                background: "#E03C31",
                height: "100%",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <SearchOutlinedIcon />
              <Typography>Tìm kiếm</Typography>
            </InputAdornment>
          }
        />
      </Stack>
    </Box>
  );
};
TabPanelForm.propTypes = {
  placeholder: PropTypes.string,
};
