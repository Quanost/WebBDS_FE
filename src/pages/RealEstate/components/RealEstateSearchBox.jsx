import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectTypeOfRealEstate from "./SelectTypeOfRealEstate";
import SelectTypeOfAreaAndProject from "./SelectTypeOfAreaAndProject";
import RangePrice from "./RangePrice";
import RangeArea from "./RangeArea";

const RealEstateSearchBox = ({ searchType }) => {
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

        <Stack direction="row" alignItems="center">
          <Box flex="1">
            <RadioGroup
              defaultValue={searchType}
              style={{
                padding: "16.5px 14px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                sx={{
                  margin: 0,
                  ".MuiButtonBase-root.MuiRadio-root": {
                    display: "none",
                  },
                  ".MuiButtonBase-root.MuiRadio-root + .MuiTypography-root": {
                    fontSize: 14,
                    color: "#999999",
                    padding: "5px 20px",
                    borderRadius: "4px",
                    border: "1px solid #999",
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
                  margin: 0,
                  ".MuiButtonBase-root.MuiRadio-root": {
                    display: "none",
                  },
                  ".MuiButtonBase-root.MuiRadio-root + .MuiTypography-root": {
                    fontSize: 14,
                    color: "#999999",
                    padding: "5px 20px",
                    borderRadius: "4px",
                    border: "1px solid #999",
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
          </Box>

          <Divider
            sx={{ borderColor: "#F2F2F2" }}
            orientation="vertical"
            flexItem
          />
          <Box flex="2" padding="16.5px 14px">
            <OutlinedInput
              style={{
                backgroundColor: "F2F2F2",
                height: 33,
              }}
              size="small"
              variant="outlined"
              placeholder="Tìm nhanh"
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
            />
          </Box>

          <Divider
            sx={{ borderColor: "#F2F2F2" }}
            orientation="vertical"
            flexItem
          />
          <Box flex="1">
            <SelectTypeOfRealEstate />
          </Box>

          <Divider
            sx={{ borderColor: "#F2F2F2" }}
            orientation="vertical"
            flexItem
          />
          <Box flex="1">
            <SelectTypeOfAreaAndProject />
          </Box>

          <Divider
            sx={{ borderColor: "#F2F2F2" }}
            orientation="vertical"
            flexItem
          />
          <Box flex="1">
            <RangePrice />
          </Box>

          <Divider
            sx={{ borderColor: "#F2F2F2" }}
            orientation="vertical"
            flexItem
          />
          <Box flex="1">
            <RangeArea />
          </Box>
        </Stack>
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

RealEstateSearchBox.propTypes = {
  searchType: PropTypes.string,
};
export default RealEstateSearchBox;
